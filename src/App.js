import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import MetaMask from './components/MetaMask/MetaMask';
import MyFooter from './components/Footer/MyFooter';

function App() {
  return (
    <div >
      <Navbar />
      <Products />
      <MetaMask />
     <MyFooter />
    </div>
  );
}

export default App;
