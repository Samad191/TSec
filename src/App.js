import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import MultiActionAreaCard from './components/Card';
import Testing from './components/Card/testing';
import Blog from './components/Blog';
import { About } from './components/About';
import MetaMask from './components/MetaMask/MetaMask';
import MyFooter from './components/Footer/MyFooter';

function App() {
  return (
    <div >
      <Navbar />
      <Products />
       <MetaMask />
      <MultiActionAreaCard />
      <About />
      <Blog />
      {/* <Testing /> */}
     <MyFooter />

    </div>
  );
}

export default App;
