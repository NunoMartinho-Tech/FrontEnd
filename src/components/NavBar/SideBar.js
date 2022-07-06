import React ,{useEffect, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/Nav.scss';
import SidebarMenu from "./SideBarMenu";
import Container from 'react-bootstrap/Container';
import { FaBars, FaClipboardList, FaRegEdit}  from 'react-icons/fa';
import {AiFillDashboard} from 'react-icons/ai';
import {BsFillHouseDoorFill}  from 'react-icons/bs';
import {HiLocationMarker}  from 'react-icons/hi';
import {FiUsers}  from 'react-icons/fi';
import {CgProfile}  from 'react-icons/cg';
import {BiLogOut}  from 'react-icons/bi';
import { NavLink, Outlet } from "react-router-dom";
import { IoAddCircleOutline, IoSettingsSharp } from "react-icons/io5";
import SoftinsaLogo from '../../images/Logo_Softinsa_branco.png';
import axios from 'axios';
import { IconContext } from "react-icons";

{/**
    Menu com icons e rotas definidas
*/}

const routes = [
    {
        path: "/home/dashboard",
        name: "Dasboard",
        icon: <AiFillDashboard/>
    },
    {
        path: "/home/centros",
        name: "Centros",
        icon: <HiLocationMarker/>,
        subRoutes: [
            {
                path: "/home/centros/list",
                name: "Listar Centros",
                icon: <FaClipboardList/>
            },
            {
                path: "/home/centros/add",
                name: "Adicionar Centro",
                icon: <IoAddCircleOutline/>
            },
        ],
    },
    {
        path: "/home/salas",
        name: "Salas",
        icon: <BsFillHouseDoorFill/>,
        subRoutes: [
            {
                path: "/home/salas/list",
                name: "Listar Salas",
                icon: <FaClipboardList/>
            },
            {
                path: "/home/salas/add",
                name: "Adicionar Sala",
                icon: <IoAddCircleOutline/>
            },
        ],
    },
    {
        path: "/home/utilizadores",
        name: "Utilizadores",
        icon: <FiUsers/>,
        subRoutes: [
            {
                path: "/home/utilizadores/list",
                name: "Listar Utilizadores",
                icon: <FaClipboardList/>
            },
            {
                path: "/home/utilizadores/add",
                name: "Adicionar Utilizador",
                icon: <IoAddCircleOutline/>
            },
        ],
    },
    {
        path: "/home/defenicoes",
        name: "Defenições",
        icon: <IoSettingsSharp/>,
        subRoutes: [
            {
                path: "/home/utilizadores/get",
                name: "Perfil",
                icon: <CgProfile/>
            },
        ],
    },
    {
        path: "/home/leave",
        name: "Log Out",
        icon: <BiLogOut/>
    },
]

const SideBar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [foto, setFoto] = useState();
    const [PrimeiroNome, setPNome] = useState("");
    const [UltimoNome, setUNome] = useState("");
    const [Cargo, setCargo] = useState("");

    {/**
        Obter os dados do utilizador.
        Nota: Tentar ir buscar ao local storage 
    */}

    useEffect(()=>{
        const id = localStorage.getItem('id')
        axios.get('utilizadores/get/'+id)
        .then(res=>{
            if(res.data.sucesso){
                const data = res.data.user[0];
                setFoto(data.Foto);
                setPNome(data.Pnome);
                setUNome(data.Unome);
                setCargo(data.TiposGestor.descricao)
            }
        })
        .catch(error => {
            alert(error)
        });
    });

    const toggle = () => setIsOpen(!isOpen);

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
    <>
        <div className="main-container">
            <motion.div
                animate={{
                    width: isOpen ? "220px" : "50px",
                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 10,
                    },
                }} className={'sidebar'}>

                {/**Logo da softinsa */}

                <div className="top_section pb-3 px-2">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.h1
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="logo">
                                <img src={SoftinsaLogo} alt="logo" className="logoSoftinsa" />
                            </motion.h1>
                        )}
                    </AnimatePresence>

                {/**Icon do menu*/}
                <IconContext.Provider value={{ color: "white", size:'25px'}}>            
                    <div className="bars mx-1"  >
                        <FaBars onClick={toggle}/>
                    </div>
                </IconContext.Provider>
                
                {/**Imagem de perfil, nome e cargo */}

                </div>
                    <div className="search">
                        <div className="frame_imagem_perfil">
                            <img src={foto} alt="" className="Imagemperfil"/>
                        </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.h6
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden">    
                                <p className="NomePerfil">{PrimeiroNome + " " + UltimoNome}</p>
                                <p className="Cargo">{Cargo}</p>
                            </motion.h6>
                        )}
                    </AnimatePresence>
                </div>

                <section className="routes">
                    {routes.map((route, index) => {
                        if (route.subRoutes) {
                            return (
                            <SidebarMenu
                                setIsOpen={setIsOpen}
                                route={route}
                                showAnimation={showAnimation}
                                isOpen={isOpen}/>
                            );
                        }
                        return (
                            <NavLink
                                to={route.path}
                                key={index}
                                className="link"
                                activeClassName="active">
                                <IconContext.Provider value={{ color: "white", size:'25px'}}>
                                    <div className="icon">{route.icon}</div>
                                </IconContext.Provider>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            variants={showAnimation}
                                            initial="hidden"
                                            animate="show"
                                            exit="hidden"
                                            className="link_text">
                                            {route.name}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </NavLink>
                        );
                    })}
                </section>
            </motion.div>
            
            <Container fluid>{children}</Container>
        </div>
    </>
    );
};

export default SideBar;