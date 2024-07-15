import logo from "../assets/projects/logo.png";
import { FaLinkedin, FaGithub,FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, } from "react-icons/fa6";


const NavBar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img class=" object-cover h-30 w-40  text-white"src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <FaLinkedin onClick={()=> window.open('https://www.linkedin.com/in/amritpal-singh001/','_blank')} style={{ cursor: 'pointer' }} />
        <FaGithub onClick={()=> window.open('https://github.com/Amritpals01','_blank')} style={{ cursor: 'pointer' }}/>
        <FaInstagram onClick={()=> window.open('https://www.instagram.com/i_ammy01/','_blank')}style={{ cursor: 'pointer' }}/>
        <FaSquareXTwitter onClick={()=> window.open('https://github.com/Amritpals01','_blank')} style={{ cursor: 'pointer' }}/>

    </div>
  </nav>
}

export default NavBar
