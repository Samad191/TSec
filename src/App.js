import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MM from './assets/MM.mp4';
import Products from './components/Products';
import { MetaMask } from './components/MetaMask';
import MultiActionAreaCard from './components/Card';
import Testing from './components/Card/testing';
import MyCard from './Blog';

function App() {
  return (
    <div >
      <Navbar />
      <Products />
      {/* <MetaMask /> */}
      <MultiActionAreaCard />
      <MyCard />
      {/* <Testing /> */}
     {/* <Footer /> */}
    </div>
  );
}

export default App;
