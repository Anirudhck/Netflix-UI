import './App.css'
import Row from "./Componenets/Row";
import request from "./Componenets/Request";
import Banner from './Componenets/Banner';
import Nav from './Componenets/Nav';
function App() {
  return (
 
    <div className='app'>
     <Nav/>
      <Banner/>
      <Row title={"Netflix Originals"}
           fetchUrl={request.fetchNetflixOriginals} isLarge={true}/>
      <Row title={"Netflix Trending"}
           fetchUrl={request.fetchTrending}/>
      <Row title={"Top Rated Movies"}
           fetchUrl={request.fetchTopRated}/>     
      <Row title={"Action Movies"}
           fetchUrl={request.fetchActionMovies}/> 
      <Row title={"Comedy Movies"}
           fetchUrl={request.fetchComedyMovies}/> 
      <Row title={"Horror Movies"}
           fetchUrl={request.fetchHorrorMovies}/>   
      <Row title={"Romantic Movies"}
           fetchUrl={request.fetchRomanceMovies}/>        
      <Row title={"Netflix Documentaries"}
           fetchUrl={request.fetchDocumentaries}/>                    
    </div>    
  
  );
}

export default App;
