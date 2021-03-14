import React, {useState, useEffect} from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
//import movieTrailer from "movie-trailer";

const imagebaseurl = "https://image.tmdb.org/t/p/original/";

function Row({fetchurl, title, isLargeRow}){
	const [movies, setMovies] = useState([]);
	const [trailerUrl, settrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData(){
			const req = await axios.get(fetchurl);
			setMovies(req.data.results);
			return req;
		}
		fetchData();
	}, [fetchurl]);
	//[] if it is empty useEffect will run once on Row loads
	// [var] if not empty then how many times var value changes useEffect will run that time

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		}
	};
	  const handleClick = async (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=bc44dee36c7c9017b4ecf82ddaee6faa`
      );
      settrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

// ${isLargeRow && "row_Largeposter"} i.e. if isLargeRow==true then add className "row_Largeposter" to that element.

	return (
		<div className="row">
			<h2 className="row_title">{title}</h2>
			<div className="row_posters" >
				{movies.map((movie) => (
				<img key={movie.id} 
				onClick={() => handleClick(movie)}
				className={`row_poster ${isLargeRow && "row_Largeposter"}`}
				src={`${imagebaseurl}${
					isLargeRow ? movie.poster_path : movie.backdrop_path
				}`} 
				alt={movie.name} />
			))}
			</div>
			{trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
		</div>
		)
}


export default Row;