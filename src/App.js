import Container from "@mui/material/Container";
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
function App() {
  
   
  return (
    <Router>
      <Header/> 
      <div className="App">
        <Container>
            
              <Routes>
                <Route path = "/" Component={Trending}/>
                <Route path = "/movies" Component={Movies}/>
                <Route path = "/series" Component={Series}/>
                <Route path = "/search" Component={Search}/>
              </Routes>
            
        </Container>
      </div>
      
      <SimpleBottomNavigation/>
    </Router>
  );
}

export default App;
