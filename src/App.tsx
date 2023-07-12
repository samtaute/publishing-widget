import Section from "./components/Section";
import {useContext, useEffect } from "react";
import SoftboxContext from "./store/softbox-context";

function App() {
  console.log("app");
  const ctx = useContext(SoftboxContext);

  useEffect(() => {
    ctx.fetchCategory("news");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Section />;
}

export default App;
