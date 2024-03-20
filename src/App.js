import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './Component/Navbar/Navbar';
import Listing from './Component/Listing/Listing';
import Cards from './Component/Cards/Cards'; // Import Cards from the correct path



function App() {
  return (
    <Router> 
      <div className="">
        <Navbar />
        <Listing />
        <Cards />
      </div>
    </Router>
  );
}

export default App;
