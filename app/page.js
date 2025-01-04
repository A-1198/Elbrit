import Image from "next/image";
import Hero from "./Components/Hero/hero";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/footer";
import Ingredients from "./Components/Ingredients/Ing";
import Blog from "./Components/Blog/blog";
export default function Home() {
  return (
    <div>
      <Hero/>
      <Main/>
      <Ingredients/>
      <Blog/>
      <Footer/>
    </div>
  );
}
