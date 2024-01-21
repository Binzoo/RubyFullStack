import { useState } from "react";

function Slides({ data }) {
  const [imageUrl, setimgURl] = useState();
  const [heading, setHeading] = useState();
  const [slogon, setSlogon] = useState();
  const [btnName, setBtnName] = useState();
  const [redirectBtn, setRedirectBtn] = useState();

  async function Submit(e) {
    e.preventDefault();
    const result = await postData("http://localhost:3000/s_info", {
      imageUrl,
      heading,
      slogon,
      btnName,
      redirectBtn,
    });
    console.log(result); // Log the server response
  }

  async function postData(url = "", data = {}) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Data is sended.");
      return await response.json();
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  return (
    <>
      <div className=" grid grid-cols-2 space-x-1">
        {data.map((d, i) => (
          <div
            key={i}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img className="rounded-t-lg" src={d.imageUrl} alt="" />

            <div className="p-5">
              <input
                className="mt-2"
                type="text"
                placeholder={d.imageUrl}
                onChange={(e) => setimgURl(e.target.value)}
              />
              <input
                className="mt-2"
                type="text"
                placeholder={d.heading}
                onChange={(e) => setHeading(e.target.value)}
              />
              <input
                className="mt-2"
                type="text"
                placeholder={d.slogon}
                onChange={(e) => setSlogon(e.target.value)}
              />
              <input
                className="mt-2"
                type="text"
                placeholder={d.btnName}
                onChange={(e) => setBtnName(e.target.value)}
              />
              <input
                className="mt-2"
                https:type="text" //www.youtube.com/channel/UCQBg29CxZF78NeNTfsPPSQg
                placeholder={d.redirectBtn}
                onChange={(e) => setRedirectBtn(e.target.value)}
              />
            </div>
            <button
              onClick={Submit}
              className=" bg-white mb-3 rounded-lg px-5 text-2xl hover:bg-slate-300"
            >
              Create
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Slides;
