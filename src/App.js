import './App.css';
import Header from '../src/Containers/Header'
import Details from '../src/Containers/Details'
// import AllCountries from '../src/Containers/AllCountries'
function App() {
  return (
    <div className="App">
     <Header/>
     <Details/>
     {/* <AllCountries/> */}
    </div>
  );
}

export default App;
