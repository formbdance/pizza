import { useEffect } from 'react'
import axios from "axios"
import { loadItems } from '@store'
import { useSelector, useDispatch } from 'react-redux'

export const Chose = (props) => {
    const dispatch = useDispatch();
    const loadedItems = useSelector(state => state.menuStatus)

    const serverUrl = 'http://localhost:5000/loadfoods' 
    const choseCategory = props.loadpage

    const data = {
        selectid: choseCategory
    }


    useEffect(() => {
        loadData()
    }, [choseCategory])

    const loadData = async () => {
        await axios.post(serverUrl, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            dispatch(loadItems(res.data))
        }).catch(err => {
            console.log('Ошибка получения данных: ' + err)
        })
    }

    const deleteThis = async (id) => {
        try {
            await axios.delete(`${serverUrl}/${id}`);
            console.log('Успешно удалено');
        } catch (err) {
            console.log('Удаление не удалось: ' + err)
        } finally {
            loadData()
        }
    }


    return(
        <section className="container m-auto flex justify-center mt-8">
            <section className="w-full max-w-6xl flex justify-center">
                <section className="grid m-8 sm:m-0 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    
                    {
                        !loadedItems.value ? <>Loading...</> : loadedItems.value.map((item) => {
                            return (
                                <section className="shadow-lg p-3 rounded-xl flex flex-col justify-between relative" key={item._id}>
                                    <section className='cursor-pointer hover:scale-105 hover:bg-red-500 transition-all flex items-center justify-center text-white w-6 h-6 bg-red-400 rounded-full absolute right-0 translate-x-2 -translate-y-5'>
                                        <button onClick={() => deleteThis(item._id) } className='text-md font-semibold'>X</button>
                                    </section>
                                    <section>
                                        <section className='h-60 flex justify-center'>
                                            <img src={'http://localhost:5000/loadfoods/' + item.imgFile} width={256} className='h-full' alt="" />
                                        </section>
                                        <section className='flex flex-col gap-2'>
                                            <p className='font-semibold'>{item.foodName}</p>
                                            <p className='opacity-40'>
                                            {
                                                JSON.parse(item.sizeS).gram
                                            }
                                             <span className='ml-2'>гр.</span>
                                            </p>
                                            <p className='opacity-80'>
                                                {item.description}
                                            </p>
                                        </section>
                                    </section>
                                    <section className='mt-8 flex justify-between'>
                                        <p className='font-bold text-lg'>
                                            {
                                                JSON.parse(item.sizeS).price
                                            }
                                            <span className='ml-2'>₽</span>
                                        </p>
                                        <button className='font-semibold text-white bg-purple-500 rounded-full p-1 pr-4 pl-4'>В корзину</button>
                                    </section>
                                </section>
                            )
                        })
                    }




                </section>


            </section>
        </section>
    )
}