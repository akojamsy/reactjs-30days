import { useState } from "react";
import "./App.css";
import { Hero, Sales } from "./components";
import { heroapi, popularsales, toprateslaes } from "./data/data";

function App() {
  const [count, setCount] = useState(0);

  // console.log(heroapi);
  return (
    <>
      <div className='relative flex flex-col gap-16'>
        <Hero heroapi={heroapi} />
        <Sales sales={popularsales} exist />
        <Sales sales={toprateslaes} />
      </div>
    </>
  );
}

export default App;
