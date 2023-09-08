import { useState, useEffect } from 'react'
import axios from 'axios';
import Footer from "./components/Footer/Footer";
import { BsFillDice5Fill } from 'react-icons/bs';

function App() {
  const url = "https://api.adviceslip.com/advice"

  const [advice, setAdvice] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      setAdvice(response.data.slip)
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  console.log("Advice:::", advice);
  if (!advice) return null;

  return (
    <main className="bg-dark-blue h-screen">
      <section className="container flex ">
        <div className=" rounded-lg  bg-dark-grayish-blue justify-center content-center">
          <p> Advice # {advice.id}</p>
          <p className="text-3xl">{advice.advice}</p>
          <div className="rounded-lg bg-neon-green"><BsFillDice5Fill />   </div>
                 
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App
