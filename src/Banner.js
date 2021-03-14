import React,{useState, useEffect} from 'react';
import axios from './axios';
import request from './request';
import './Banner.css';

const Banner = () => {

const [movie, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData(){
			const req = await axios.get(request.fetchNetflixOriginals);
			setMovies(
				req.data.results[
				Math.floor(Math.random()*req.data.results.length)
				]
			);
			console.log(req.data.results);
			return req.data.results;
		}
		fetchData();
	}, []);

function truncate(str, n){
	return str?.length > n ? str.substring(0, n-1) + "..." : str;
}


	console.log(movie);
	return(
		<header className="banner" style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
					)`,
				backgroundPosition: "center center",
			}}>
			<div className="banner_contents">
				<h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
				<button  className="banner_btns">Play</button>
				<button  className="banner_btns">Mylist</button>
				<h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
			</div>
			<div className="banner--fadebottom"></div>
		</header>
	)
}

export default Banner;