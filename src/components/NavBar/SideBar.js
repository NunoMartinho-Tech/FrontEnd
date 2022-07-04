import React ,{useEffect, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/Nav.scss';
import SidebarMenu from "./SideBarMenu";
import { FaBars, FaClipboardList, FaRegEdit}  from 'react-icons/fa';
import {AiFillDashboard} from 'react-icons/ai';
import {BsFillHouseDoorFill}  from 'react-icons/bs';
import {HiLocationMarker}  from 'react-icons/hi';
import {FiUsers}  from 'react-icons/fi';
import {CgProfile}  from 'react-icons/cg';
import {BiLogOut}  from 'react-icons/bi';
import { NavLink } from "react-router-dom";
import { IoAddCircleOutline, IoSettingsSharp } from "react-icons/io5";
import SoftinsaLogo from '../../images/Logo_Softinsa_branco.png';
import axios from 'axios';


const routes = [
    {
        path: "/dashboard",
        name: "Dasboard",
        icon: <AiFillDashboard/>
    },
    {
        path: "/centros",
        name: "Centros",
        icon: <HiLocationMarker/>,
        subRoutes: [
            {
                path: "/centros/list",
                name: "Listar Centros",
                icon: <FaClipboardList/>
            },
            {
                path: "/centros/add",
                name: "Adicionar Centro",
                icon: <IoAddCircleOutline/>
            },
        ],
    },
    {
        path: "/salas",
        name: "Salas",
        icon: <BsFillHouseDoorFill/>,
        subRoutes: [
            {
                path: "/salas/list",
                name: "Listar Salas",
                icon: <FaClipboardList/>
            },
            {
                path: "/salas/add",
                name: "Adicionar Sala",
                icon: <IoAddCircleOutline/>
            },
        ],
    },
    {
        path: "/utilizadores",
        name: "Utilizadores",
        icon: <FiUsers/>,
        subRoutes: [
            {
                path: "/utilizadores/list",
                name: "Listar Utilizadores",
                icon: <FaClipboardList/>
            },
            {
                path: "/utilizadores/add",
                name: "Adicionar Utilizador",
                icon: <IoAddCircleOutline/>
            },
        ],
    },
    {
        path: "/defenicoes",
        name: "Defenições",
        icon: <IoSettingsSharp/>,
        subRoutes: [
            {
                path: "/utilizadores/get",
                name: "Perfil",
                icon: <CgProfile/>
            },
        ],
    },
    {
        path: "/leave",
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

    const inputAnimation = {
        hidden: {
        width: 0,
        padding: 0,
        transition: {
        duration: 0.2,
        },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

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
            <motion.div
            animate={{
                width: isOpen ? "200px" : "45px",

                transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
                },
            }}
            className={`sidebar `}
            >
            <div className="top_section pb-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                    >
                    <img src={SoftinsaLogo} alt="logo" className="logoSoftinsa" />
                    </motion.h1>
                )}
            </AnimatePresence>

            <div className="bars">
                <FaBars onClick={toggle} />
            </div>
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
                    exit="hidden"
                    >    
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
                        isOpen={isOpen}
                    />
                    );
                }

                return (
                    <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                    >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                        {isOpen && (
                        <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                        >
                            {route.name}
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </NavLink>
                );
                })}
            </section>
            </motion.div>
            <main>{children}</main>
    </>
    );
};

export default SideBar;