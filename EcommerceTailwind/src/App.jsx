import { useState } from "react";
import "./App.css";
import {
  Hero,
  Sales,
  FeaturedHightlight,
  TopStories,
  Footer,
} from "./components";
import "@splidejs/react-splide/css";
import {
  heroapi,
  popularsales,
  toprateslaes,
  featured,
  highlight,
  story,
  footer,
} from "./data/data";

function App() {
  const [count, setCount] = useState(0);

  // console.log(heroapi);
  return (
    <>
      <main className='relative flex flex-col gap-16'>
        <Hero heroapi={heroapi} />
        <Sales sales={popularsales} exist />
        <FeaturedHightlight data={highlight} />
        <Sales sales={toprateslaes} />
        <FeaturedHightlight data={featured} exist />
        <TopStories news={story.news} title={story.title} />
      </main>
      <Footer footer={footer} />
    </>
  );
}

export default App;
