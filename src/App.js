import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import MultiActionAreaCard from './components/Card';
import Testing from './components/Card/testing';
import Blog from './components/Blog';
import { About } from './components/About';
import MetaMask from './components/MetaMask/MetaMask';
import MyFooter from './components/Footer/MyFooter';
import { NewsLetter } from './components/NewsLetter';

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
      <NewsLetter />
     <MyFooter />

    </div>
  );
}

export default App;
