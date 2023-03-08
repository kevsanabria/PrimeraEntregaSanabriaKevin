import React from "react";
import cartCSS from './CartWidget.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function CartWidget(){
    const contar=3;
    
    return(
        <div className="d-flex align-items-end">
            <p >{contar}</p>
            <div>
            <button><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>
    )
    }
    
    export default CartWidget;
