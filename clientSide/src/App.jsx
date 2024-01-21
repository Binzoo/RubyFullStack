import "./App.css";
import { useEffect, useState } from "react";
import SlideBar from "./components/SlideBar";

let slideInfo = [
  {
    imageUrl:
      "https://149434221.v2.pressablecdn.com/wp-content/uploads/2015/08/dot-online.png",
    heading: "Kfm Next Monthly meeting",
    slogon: "25 November 2023",
    btnName: "Register",
    redirectBtn: "https://google.com",
  },

  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/09/10/11/44/tulip-8244705_1280.jpg",
    heading: "Get Involved ",
    slogon: "Change Community",
    btnName: "Donate Now",
    redirectBtn: "https://www.youtube.com/",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/09/10/11/44/tulip-8244705_1280.jpg",
    heading: "Get Involved ",
    slogon: "Change Community",
    btnName: "Donate Now",
    redirectBtn: "https://www.youtube.com/",
  },
];

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
    <div className="w-[98%] m-auto pt-11">
      <SlideBar slideInfo={data} />
    </div>
  );
}

export default App;
