import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../request";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Banner = ({ fetchUrl }) => {
  // console.log("yes");
  const [movie, setMovie] = useState([]);
  useEffect(() => {

    async function fetchData() {
      const { data } = await axios.get(fetchUrl);

      setMovie(
        data.results[
        Math.floor(Math.random() * data.results.length - 1)
        ]
      );


    } fetchData();
  }, []);

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.original_name}
          </h1>
          <div>

            <p className="banner__description">
              {movie.overview}
            </p>
          </div><br />
          <div>

            <button className="banner__button">Play</button>
            <button className="banner__button">My Lists</button>
          </div>

        </div>
      </header>
    </div>
  )
};

export default Banner;
