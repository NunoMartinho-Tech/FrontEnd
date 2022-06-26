import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as TbIcons from 'react-icons/tb';
import * as HiIcons from 'react-icons/hi';

export const SideBarData = [
    {
        title: 'Dasboard',
        path: '/',
        icon: <AiIcons.AiFillDashboard/>,
        cName: 'nav-text'
    },
    {
        title: 'Centros',
        path: '/centros/list',
        icon: <HiIcons.HiOfficeBuilding/>,
        cName: 'nav-text'
    },
    {
        title: 'Salas',
        path: '/salas/list',
        icon: <FaIcons.FaList/>,
        cName: 'nav-text'
    },
    {
        title: 'Utilizadores',
        path: '/utilizadores/list',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Adicionar Centro',
        path: '/centros/add',
        icon: <BsIcons.BsFillHouseDoorFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Adicionar Sala',
        path: '/salas/add',
        icon: <BsIcons.BsPlusLg/>,
        cName: 'nav-text'
    },
    {
        title: 'Adicionar Utilizador',
        path: '/utilizadores/add',
        icon: <FaIcons.FaUserPlus/>,
        cName: 'nav-text'
    }
]