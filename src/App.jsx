import { setConfiguration } from "react-grid-system";
import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";

setConfiguration({ maxScreenClass: "xl" });

function App() {
  return (
    <>
      <Nav />

      <Hero />

      <section>
        <div
          style={{
            height: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          ***
          <br />
          dummy page
          <br />
          ***
        </div>
      </section>
    </>
  );
}

export default App;
