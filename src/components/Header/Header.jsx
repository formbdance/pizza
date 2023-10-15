import { Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import gsap from "gsap";
const buttonCorsine = (e) => {
  const obj = e.target;
  gsap.to(obj, {
    scale: '0.95',
    rotateZ: '-5'
  })
}
const buttonEnter = (e) => {
  const obj = e.target;
  gsap.to(obj, {
    scale: '0.95',
    rotateZ: '5'
  })
}

const buttonEnd = (e) => {
  const obj = e.target;
  gsap.to(obj, {
    scale: '1.0',
    rotateZ: '0',
    duration: '.5',
  })
}



function Header() {
  return(
    <section>
      <section className="container m-auto w-screen">
        <section className="p-2 flex justify-center lg:justify-between  m-auto md:w-5/6 pl-8 pr-8 flex-wrap ">
          <section className="flex gap-6 xs:gap-4 flex-wrap xs:flex-nowrap justify-center">
            <section className="flex gap-2 text-2xl items-center mr-4">
              <Link to="/"><img src={require("./logo.png")} alt="IMG" className="bg-black w-28" /></Link>
              <Link to="/"><p className="font-bold">Italian <br/>Pizza</p></Link>
            </section>
            <section className="flex flex-col justify-center">
              <p className="font-semibold text-lg">Ваш город: <span className="text-purple-600">Москва</span></p>
              <p className="text-gray-400">Доставка работает с 11:00 до 23:00</p>
            </section>
          </section>
          <section className="flex items-center mt-4 sm:mt-0">
            <section className="">
              <section className="flex gap-4 whitespace-nowrap">
                <Link onMouseLeave={(e) => buttonEnd(e)} onMouseEnter={(e) => buttonCorsine(e)} className="bg-purple-500 rounded-full p-2 pl-6 pr-6 text-white" to="/corsine">Корзина | 0</Link>
                <Link onMouseLeave={(e) => buttonEnd(e)} onMouseEnter={(e) => buttonEnter(e)} className="bg-purple-600 rounded-full p-2 pl-6 pr-6 text-white" to="/admin">Войти</Link>
              </section>
            </section>
          </section>
        </section>
      </section >
      <Menu />
    </section>
  )
}
export default Header