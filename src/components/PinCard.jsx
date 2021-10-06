import React from 'react';
import {BsBoxArrowUp } from 'react-icons/bs';
import {FaEllipsisH} from 'react-icons/fa';


const PinCard = (props) => {
  return (
    <div
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
      >
      
     <img src={props.image} alt='Cargar imagen ' style={{ ..._stylesPinCard.pin_card }} />
    </div> 
    
  );
  
  
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'transparent',
    alignItems: 'center',
    


  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
};

export default PinCard;
