import React from 'react';
import { BsPinterest }from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';
import {ImSearch} from 'react-icons/im';
import {GoBell} from 'react-icons/go';
import { BsFillChatDotsFill} from 'react-icons/bs';
import { IoIosArrowDown} from 'react-icons/io';


const HeaderLayout = () => {
  return (
    <div style ={_styleHeader.BarraHeader}>
      <BsPinterest size={35} color = "#B80000 "/>
      
      <div style={_Navegacion.barra}>
    
      <ImSearch size ={15} color = "#C6C1C1 "/>
      <text>
   Buscar
</text>
      </div>
      <GoBell size={20} color ="gray"/>
      <BsFillChatDotsFill size ={25} color ="gray"/>
      <FaUserCircle size={35} color ="gray"/>
      <IoIosArrowDown size ={25} color = "#EAE9E9"/>
      
    
     
    </div>
    
  )
};

const _styleHeader = {
  BarraHeader:{
    display: 'flex',
    paddling: '20px',
    margin: '0px',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100vw',
    height: '7vh',
    rigth:'20vw',
    boxSizing: "border-box",// MODIFICA LA PANTALLA

  }
};

const _Navegacion ={
  barra:{
    display: 'flex',
    borderRadius: '40px',
    backgroundColor: '#F3F3F3',
    
    width:'80%',
    height:'4vh',
    alignItems: 'center',//Centar iconos
   padding: '5px',//bordes
    
  }
}




export default HeaderLayout;
