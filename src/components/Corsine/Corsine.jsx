
const Item = (props) => {
    return(
        <section className='p-4 flex justify-between items-center border-b-2'>
            <section className='flex items-center gap-4'>
                <img src={require('../Home/img/shw.jpg')} className='w-20 h-20 rounded-2xl' alt="" />
                <section>
                    <p className='font-semibold'>{props.name}</p>
                    <p className='text-gray-300'>{props.gramm} гр</p>
                </section>
            </section>
            <section className='flex gap-8 items-center flex-wrap justify-center'>
                <section className='text-md font-semibold flex gap-4 bg-gray-200 rounded-full p-1 pr-3 pl-3'>
                    <button >-</button>
                    <p>{props.items}</p>
                    <button>+</button>
                </section>
                <section className='font-semibold text-md'>
                    <p>{props.price} ₽</p>
                </section>
                <section>
                    <img src={require("./img/trash.png")} className='w-6' alt="" />
                </section>
            </section>
        </section>
    )
}

export const Corsine = () => {
    return(
        <section className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <section className="flex justify-center md:justify-between flex-wrap">
                <section className="w-full lg:w-1/2">
                    <h2 className="text-xl font-bold mb-8">Корзина:</h2>
                    <section className="">


                        <Item name='Шаурма восточная' items='2' price='333' gramm='400'/>
                        <Item name='Шаурма сибирская' items='1' price='349' gramm='450'/>

                        

                    </section>
                </section>
                <section className="w-full lg:w-1/2 mt-8 lg:mt-0" >
                    <section className='flex items-center justify-center h-full flex-col'>
                        <h2 className='font-bold text-3xl'>Оформление заказа</h2>
                        <p className='w-1/2 text-center mt-2 text-sm text-gray-400'>Для оформления заказа введите, пожалуйста, ваш номер телефона:</p>
                        <section className='mt-4'>
                            <input type="text" className='text-center bg-gray-100 rounded-2xl p-1 pr-3 pl-3 text-sm' placeholder='+7 (***) *** ** **' />
                        </section>
                        <button className="bg-purple-600 rounded-full p-2 pl-6 pr-6 text-white mt-8">Заказать</button>
                    </section>

                </section>
            </section>
        </section>
    )
}