import { Link } from "react-router-dom"

export const Menu = () => {
    return(
        <section className="bg-purple-500 p-4 flex justify-center">
            <section className="flex gap-8 font-semibold flex-wrap justify-center text-white">
                <Link to="/menu/pizza" className="">
                  <p className="hover:text-gray-50 hover:scale-105 transition-all">Пицца</p>
                </Link>
                <Link to="/menu/shaurma" className="">
                  <p className="hover:text-gray-50 hover:scale-105 transition-all">Шаурма</p>
                </Link>
                <Link to="/menu/soup" className="">
                  <p className="hover:text-gray-50 hover:scale-105 transition-all">Супы</p>
                </Link>
                <Link to="/menu/fries" className="">
                  <p className="hover:text-gray-50 hover:scale-105 transition-all">Фритюр</p>
                </Link>
                <Link to="/menu/salad" className="">
                  <p className="hover:text-gray-50 hover:scale-105 transition-all">Салаты</p>
                </Link>
                <Link to="/menu/wok" className="">
                  <p className="hover:text-gray-50 hover:scale-105 transition-all">Wok</p>
                </Link>
                <Link to="/menu/rolls" className="">
                  <p className="hover:text-gray-50 hover:scale-105 transition-all">Роллы</p>
                </Link>
                <Link to="/menu/drinks" className="">
                  <p className="hover:text-gray-50 hover:scale-105 transition-all">Напитки</p>
                </Link>
            </section>
        </section>
    )
}