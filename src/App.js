import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MM from './assets/MM.mp4';
import Products from './components/Products';
import { MetaMask } from './components/MetaMask';

function App() {
  return (
    <div >
      <Navbar />
      <Products />
      <MetaMask />
     <Footer />
    </div>
  );
}

export default App;
