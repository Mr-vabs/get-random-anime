import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import "./styles.css";

const App = () => {
  const [data, setData] = useState();
  const [randomNumber, setRandomNumber] = useState(143);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const min = 0;
    const max = 2400;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
    getAnime(randomNum);
  };

  const getAnime = async (randomNum) => {
    let url = `https://api.jikan.moe/v4/anime/${randomNum}/full`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((animeData) => {
        setData(animeData.data);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  };

  return (
    <div className="container-fluid position-relative">
      {data && <AnimeCard data={data} />}
      {!data && (
        <h1 className="display-1">No Data Found for ID {randomNumber}</h1>
      )}
      <button
        style={{ position: "fixed", bottom: "2rem", right: "2rem", background: "white", borderRadius: "50%", padding: "0" }}
        className="border-0 d-flex align-items-center"
        onClick={generateRandomNumber}
      >
        <img
          src={process.env.PUBLIC_URL + "/loading_icon.gif"}
          alt="Loading Icon"
          style={{ width: "75px", height: "75px", borderRadius: "50%" }}
        />
      </button>
    </div>
  );
};

export default App;
