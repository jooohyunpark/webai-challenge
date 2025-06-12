import { setConfiguration } from "react-grid-system";
import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import Dummy from "@/sections/Dummy";

setConfiguration({ maxScreenClass: "xl" });

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Dummy />
    </>
  );
}

export default App;
