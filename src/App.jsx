import { useState } from "react";
import Hero from "./assets/components/Hero";
import Navbar from "./assets/components/Navbar";
import Products from "./assets/components/Products";
import Parameters from "./assets/components/Parameters";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Products />
      <Parameters />
    </>
  );
}

export default App;
