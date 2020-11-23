import mypic from './images/p1.jpg'
import mypic2 from './images/f2.jpg'
import Links from './components/LInk'
function Header () {
    return (
        <>
        <h1 >Shehla Mushtaq </h1>
        
        <img src={mypic} width="200px"></img>
        <img src={mypic2} width="200px" height="200px" />
        <img src={mypic} width="200px"></img>
        <img src={mypic2} width="200px" height="200px" />
        <img src={mypic} width="200px"></img>
        <img src={mypic2} width="200px" height="200px" /><br />git
        <Links/>
        
        
        <h3>Student of Web Graphics</h3>
        <h5>Learning from Teacher Faiza</h5>
        
        </>
    );
}
export default Header;