import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NavBar.css';
import * as FaIcons from 'react-icons/fa';
import {IconContext} from 'react-icons';
import AuthService from '../pages/auth.service';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import logo from '../images/Logo_Softinsa_branco.png';
import { Link } from 'react-router-dom';
import {SideBarData} from './NavBar_Dados';
import { useNavigate } from "react-router-dom";

function NavBar(props) {

  const[sidebar, setSideBar] = useState(false)
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate("");

  useEffect(()=>{
    const user = AuthService.getCurrentUser();
    if(user){
      setCurrentUser({currentUser: user});
    }
  }, []);

  const MostraSideBar = () => setSideBar(!sidebar)
  const FecharSideBar = () => setSideBar(!sidebar)


    return (
      <>
          <IconContext.Provider value={{color: '#ffffff'}}>
            <div className='navbar mb-3 row align-items-start'>
              <Col>
                <Link to='#' className='menu-bars'>
                  <FaIcons.FaBars onClick={MostraSideBar} />
                </Link>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logoImagem" className='logo_imagem'/>
                </Navbar.Brand>
              </Col>
              {/* Fazer aqui o resto do menu, submenu com links e imagem de perfil */} 
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{color: '#b7b7b7', size:'25px'}}> 
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                  <ul className='nav-menu-items' onClick={FecharSideBar}>
                      {SideBarData.map((item, index) => {
                        return(
                          <li key={index} className={item.cName}>
                            <Link to={item.path}>
                              {item.icon}
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        )
                      })}
                  </ul>
            </nav>
        </IconContext.Provider>

      </>
    )

    async function HandleLogout(event){
      event.preventDefault();
      AuthService.logout()
      navigate("/login");      
    }
}

export default NavBar