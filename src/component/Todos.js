
import React, { useState } from 'react';

import Imported from './Imported';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPrint } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { VscDebugStart } from "react-icons/vsc";
import './todo.css'

const Todos = () => {
  const [showPendingButton, setShowPendingButton] = useState(false);
  const [showImportedButton, setShowImportedButton] = useState(false);

 
  const [orders, setOrders] = useState(false);

  
  const handleOrder = () => {
    setOrders(!orders);
    
    setShowPendingButton(false);
    setShowImportedButton(false);
  };

  
  const handlevisible = () => {
    setShowPendingButton(!showPendingButton);
    
    setShowImportedButton(false);
  };
  
const handleimport=()=>{
  setShowImportedButton(!showImportedButton)
}
  return (
    <div>
      <button className='m-4' onClick={handleOrder}>Orders</button>
      {orders && (
        <>
           
            <div>
              <button  className='btn m-4' onClick={handlevisible} >Pending</button>
              <button className='btn'>Accepted</button>
              <button className='btn'>AWB Created</button>
              <button className='btn'>Ready to Ship</button>
              <button className='btn'>Shipped</button>
              <button className='btn'>Completed</button>
              <button className='btn'>Canncelled</button>
            </div>
          
        </>
     
      )}
       {
        showPendingButton && (
          <div>
            <button className='m-4 text-muted'  onClick={handleimport}>
            <LiaFileImportSolid />imported order<span></span></button>
            <button className='m-4 text-muted'>
            <VscDebugStart /><span>accept</span></button>
            <button className='m-4 text-muted' >
            <FaPrint />
            <span>Print</span>
          </button>
            </div>
        )
       }
       {
        showImportedButton && (
          <Imported/>
        )
       }
            
    </div>
  );
};

export default Todos;
