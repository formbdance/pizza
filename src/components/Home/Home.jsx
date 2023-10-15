import { Action } from "../Actions/Action"
import { Link } from "react-router-dom"
import { gsap } from "gsap"


const cardAnimate = (e) => {
  const obj = e.currentTarget;
  gsap.to(obj, {
    scale: '1.06',
    duration: '.3',
  })
}
const cardAnimateDisabled = (e) => {
  const obj = e.currentTarget;
  gsap.to(obj, {
    scale: '1.0',
    duration: '.65',
  })
}


function Home() {
    return(
      <section className="m-auto container flex flex-col items-center justify-center mt-8">
        <Action/>
        <section className="flex flex-col items-center justify-center">
          <section className="flex justify-center text-4xl font-bold mt-8 mb-12">
            <h2>Наше Меню</h2>
          </section>
          <section className="w-full max-w-6xl flex flex-col items-center">
            <section className="grid m-8 sm:m-0 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              <Link onMouseLeave={(e) => cardAnimateDisabled(e)} onMouseEnter={(e) => cardAnimate(e)} to="/menu/pizza" className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center">
                <img src={require("./img/pizzas.png")} width={256} className="h-full" alt=""/>
                <section className="p-3 font-semibold text-xl flex justify-center w-full bg-purple-500 text-white mt-4">
                  <p>Пицца</p>
                </section>
              </Link>
              <Link onMouseLeave={(e) => cardAnimateDisabled(e)} onMouseEnter={(e) => cardAnimate(e)}to="/menu/shaurma" className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center">
                <img src={require("./img/shaurma.png")} width={256} className="h-full" alt=""/>
                <section className="p-3 font-semibold text-xl flex justify-center w-full bg-purple-500 text-white mt-4">
                  <p>Шаурма</p>
                </section>
              </Link>
              <Link onMouseLeave={(e) => cardAnimateDisabled(e)} onMouseEnter={(e) => cardAnimate(e)}to="/menu/soup" className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center">
                <img src={require("./img/soup.png")} width={256} className="h-full" alt=""/>
                <section className="p-3 font-semibold text-xl flex justify-center w-full bg-purple-500 text-white mt-4">
                  <p>Супы</p>
                </section>
              </Link>
              <Link onMouseLeave={(e) => cardAnimateDisabled(e)} onMouseEnter={(e) => cardAnimate(e)}to="/menu/fries" className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center">
                <img src={require("./img/fries.png")} width={256} className="h-full" alt=""/>
                <section className="p-3 font-semibold text-xl flex justify-center w-full bg-purple-500 text-white mt-4">
                  <p>Фритюр</p>
                </section>
              </Link>
              <Link onMouseLeave={(e) => cardAnimateDisabled(e)} onMouseEnter={(e) => cardAnimate(e)}to="/menu/salad" className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center">
                <img src={require("./img/salad.png")} width={256} className="h-full" alt=""/>
                <section className="p-3 font-semibold text-xl flex justify-center w-full bg-purple-500 text-white mt-4">
                  <p>Салаты</p>
                </section>
              </Link>
              <Link onMouseLeave={(e) => cardAnimateDisabled(e)} onMouseEnter={(e) => cardAnimate(e)}to="/menu/wok" className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center">
                <img src={require("./img/wok.png")} width={256} className="h-full" alt=""/>
                <section className="p-3 font-semibold text-xl flex justify-center w-full bg-purple-500 text-white mt-4">
                  <p>Wok</p>
                </section>
              </Link>
              <Link onMouseLeave={(e) => cardAnimateDisabled(e)} onMouseEnter={(e) => cardAnimate(e)}to="/menu/rolls" className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center">
                <img src={require("./img/rolls.png")} width={256} className="h-full" alt=""/>
                <section className="p-3 font-semibold text-xl flex justify-center w-full bg-purple-500 text-white mt-4">
                  <p>Роллы</p>
                </section>
              </Link>
              <Link onMouseLeave={(e) => cardAnimateDisabled(e)} onMouseEnter={(e) => cardAnimate(e)}to="/menu/drinks" className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col items-center">
                <img src={require("./img/drinks.png")} width={256} className="h-full" alt=""/>
                <section className="p-3 font-semibold text-xl flex justify-center w-full bg-purple-500 text-white mt-4">
                  <p>Напитки</p>
                </section>
              </Link>


            </section>

          </section>

        </section>
      </section>
    )
  }
export default Home