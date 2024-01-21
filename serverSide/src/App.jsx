import { useEffect, useState } from "react";
import "./App.css";
import Slides from "./components/Slides";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getInfo() {
      try {
        let response = await fetch("http://localhost:3000/s_info");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let value = await response.json();
        setData(value);
      } catch (error) {
        console.error("Fetching error: ", error);
      }
    }

    getInfo();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Slides data={data} />
    </>
  );
}

export default App;
