import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchurl={request.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchurl={request.fetchTrending} />
      <Row title="Action Movies" fetchurl={request.fetchActionMovies} />
      <Row title="Comedy Movies Now" fetchurl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies} />
      <div className="myinfo">
      <p>Designed by <a href="https://www.linkedin.com/in/akshata-girkar-469214191/">AKSHATA SUNIL GIRKAR</a></p>
      </div>
    </div>
  );
}

export default App;
