// <img src={require('../Home/img/pizzas.png')} width={256}></img>
import axios from "axios"
import { useRef } from "react";

import {useDispatch, useSelector} from 'react-redux'
import { loadimg, deloadimg } from "@store";

export const Admin = () => {
    const dispatch = useDispatch();
    const imgLoaded = useSelector(state => state.setImg);

    const categoryRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);

    const sizeSRef = useRef(null);
    const priceSRef = useRef(null);
    const sizeMRef = useRef(null);
    const priceMRef = useRef(null);
    const sizeLRef = useRef(null);
    const priceLRef = useRef(null);

    const imgRef = useRef(null);
    const imgFilesRef = useRef(0);

    const setImg = () => {
        const reader = new FileReader();
        const imgFile = imgRef.current.files[0];
        imgFilesRef.current = imgFile;

        reader.onloadend = () => {
            dispatch(dispatch(loadimg(reader.result)))
        }
        if(imgFile) {
            reader.readAsDataURL(imgFile)
        }
    }
    const sendResult = (e) => {
        e.preventDefault();
        const formData = new FormData();

        const imgFile = imgFilesRef.current;
        formData.append('file', imgFile);
        formData.append('category', categoryRef.current.value)
        formData.append('named', nameRef.current.value)
        formData.append('description', descriptionRef.current.value )
        formData.append('sizeS', JSON.stringify({
            'gram' : sizeSRef.current.value,
            'price' : priceSRef.current.value
        }))
        formData.append('sizeM', JSON.stringify({
            'gram' : sizeMRef.current.value,
            'price' : sizeMRef.current.value
        }))

        formData.append('sizeL', JSON.stringify({
            'gram' : sizeLRef.current.value,
            'price' : sizeLRef.current.value
        }))

        axios.post('http://localhost:5000/foods', formData)
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.error('ОШИБКА: ' + err.message)
        }).finally(() => {
            dispatch(deloadimg())
        })
    }

    const imgForm = () => {
        return (
            <>
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">324x324 PNG Format</p>
            </>
        )
    }

    return (
        <section className="m-auto container flex flex-col items-center justify-center mt-8">
            <section className="">
                <form onSubmit={sendResult} className="flex gap-4  justify-center flex-wrap items-center">

                    <section className="">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-200">
                            <section className="flex flex-col items-center justify-center pt-5 pb-6 p-2">
                                
                                {
                                    imgLoaded.value ? <img src={imgLoaded.img} width={156}></img> : imgForm()
                                }
                                

                            
                            </section>
                            <input name="imgInput" key={imgLoaded.value} onChange={() => setImg()} ref={imgRef} id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </section> 

                    <section>
                        <textarea ref={descriptionRef} type="text" rows={7} placeholder="Описание товара" className="mt-2 border resize-none h-full p-2 font-semibold rounded-xl text-xs outline-none text-gray-500"></textarea>
                    </section>

                    <section className="flex flex-col gap-4  w-full p-2 sm:p-0 sm:w-2/4 md:w-1/4 text-gray-500">
                        <input ref={nameRef} type="text" className="border outline-none rounded-lg p-1 text-xs font-bold" placeholder="Название товара"/>
                        <section className="grid grid-cols-2 gap-2 ">
                            <input ref={sizeSRef} type="text" className="border outline-none rounded-lg p-1 text-xs font-semibold" placeholder="S-Грамм"/>
                            <input ref={priceSRef} type="text" className="border outline-none rounded-lg p-1 text-xs font-semibold" placeholder="400 (Цена)"/>
                            <input ref={sizeMRef} type="text" className="border outline-none rounded-lg p-1 text-xs font-semibold" placeholder="M-Грамм"/>
                            <input ref={priceMRef} type="text" className="border outline-none rounded-lg p-1 text-xs font-semibold" placeholder="600 (Цена)"/>
                            <input ref={sizeLRef} type="text" className="border outline-none rounded-lg p-1 text-xs font-semibold" placeholder="L-Грамм"/>
                            <input ref={priceLRef} type="text" className="border outline-none rounded-lg p-1 text-xs font-semibold" placeholder="800 (Цена)"/>
                        </section>
                    </section>

                    <section className="flex flex-col gap-2">
                        <select ref={categoryRef} className="border rounded-lg p-1 text-gray-500 text-xs font-semibold">
                            <option value="">Категория</option>
                            <option value="#1">Пицца</option>
                            <option value="#2">Шаурма</option>
                            <option value="#3">Суп</option>
                            <option value="#4">Фри</option>
                            <option value="#5">Салат</option>
                            <option value="#6">Wok</option>
                            <option value="#7">Напиток</option>
                            <option value="#8">Роллы</option>
                        </select>
                        <button type="submit" className="bg-green-400 text-white rounded-full p-1 font-semibold">Send</button>
                    </section>
                    
                </form>
            </section>
        </section>
    )
}