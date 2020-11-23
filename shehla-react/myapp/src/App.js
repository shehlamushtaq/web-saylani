import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './components/Footer';
import Link from './components/LInk';
import SideBar from './components/SideBar';
import Block from './components/Block';
import ShowStd from './components/ShowStd';


function App() {
  return (
  <div>
    <h1>My First App</h1>
       {/* <Header />  
       <SideBar name='shehla'/>
       <Block name='red' />
 */}
      {/* <Link/>
      <Footer/> */}
      <ShowStd />


  </div>
  );
}

export default App;
