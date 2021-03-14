import React, {useState, useEffect} from 'react'; 
import './Navbar.css'; 
import menu from './images/menu.png'; 
import netflix from './images/netflix-1.png'; 


const Navbar = () => {
	const [show, handleshow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if(window.scrollY > 90){
				handleshow(true);
			}
			else{
				handleshow(false);
			}
		});
		return () => {
			window.removeEventListener("scroll");
		}
	}, []);


const [showdiv, handlediv] = useState(false);


	return(
		<header className={`nav ${show && "nav_black"}`}>
			<img className="netflix_logo" src={netflix} alt="Netflix Logo"/>
			<img className="menu_logo" src={menu} alt="Menu Logo" onClick={() => handlediv(!showdiv)} />
			{showdiv && <div id="api_div">
				<a href="https://api.tiingo.com/">Tiingo API</a>
				<br />
				<a href="https://www.themoviedb.org/">The Movie DB</a>
				<br />
				<a href="">Github Repo</a>
			</div>}
		</header>
	)
}

export default Navbar;