import { useState, useEffect } from 'react'
import axios from 'axios';
import Footer from "./components/Footer/Footer";
import { BsFillDice5Fill } from 'react-icons/bs';
import pattern_desktop from './assets/pattern-divider-desktop.svg';
import pattern_mobile from './assets/pattern-divider-mobile.svg';

function App() {
  const url = "https://api.adviceslip.com/advice"

  const [advice, setAdvice] = useState({}); 

  useEffect(() => {
    axios.get(url).then((response) => {
      setAdvice(response.data.slip)
      // console.log(response.data.slip)
    })
  }, []);
  const clickDice = () => {

    axios.get(url).then((response) => {
      setAdvice(response.data.slip);
      
    }).catch((error) => {
      console.log(error)
    }).finally((res)=>{
      setEffect(True)
    })
  }
  console.log("Advice:::", advice);
  if (!advice) return null;

  return (
    <main className="bg-dark-blue h-screen flex flex-col items-center justify-between font-Manrope">
      <section className="container flex text-center items-center justify-center flex-1">
        <div className=" rounded-lg grid gap-6  bg-dark-grayish-blue justify-items-center items-center p-8 w-3/4 sm:w-5/6 lg:w-2/6">
          <h1 className=' text-xs text-neon-green uppercase tracking-[0.2em] font-bold'> Advice # {advice.id}</h1>
          <p className="text-[1.75rem] text-white ">"{advice.advice}"
          </p>
          <div>
            <picture>
              <source media="(min-width: 768px)" srcset={pattern_desktop} />
              <img src={pattern_mobile} alt="pattern" />
            </picture>
          </div>

          <button aria-label='refresh' onClick={() => clickDice(advice)} className="bg-neon-green p-4 rounded-full hover:shadow-[0px_0px_50px] hover:shadow-neon-green hover:animate-spin -mb-[15%]"> 
            <BsFillDice5Fill />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App
