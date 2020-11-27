import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './components/Footer';
import Link from './components/LInk';
import SideBar from './components/SideBar';
import Block from './components/Block';
import ShowStd from './components/ShowStd';
import OnOf from './components/OnOf';
import PlusMinus from './components/PlusMinus';
import ColorAgain from './components/ColorAgain';
// import Toggle from './components/Toggle';
import Hi from './components/Hi';
import By from './components/by';
import MediaCard from './components/MediaCard';
import f2 from './images/f2.jpg'
import Gate from './components/Gate';
import Room from './components/Room';
import React,{useState} from 'react'



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
      {/* <ShowStd /> */}
     {/* <OnOf/>
     <PlusMinus/>
     <ColorAgain/> */}
     {/* <Toggle/> */}
     {/* <Hi name="shehla " msg=" student"/>
     <By name="Shehla Asim" msg="Allah Hafiz"/>
     <MediaCard title="My Media" body="Lets See My media here" image={f2}/> */}
{/* <Gate  isOpen={true}/> */}

<Room/>






  </div>
  );
}

export default App;
