import React from 'react'
import styled from "styled-components";
import avatar from '../../img/avatar.png';
import {menuitems} from  '../../utils/menuitems';
import {signout} from '../../utils/Icons';



function Navigation(){
    return(
        <NavStyled>

            <div className = "user-con">
                <img src = {avatar} alt=""/>
                <div className = "text">
                    <h2>Mike</h2>
                    <p>Your Money</p>

                </div>

            </div>

            <ul className = "menu-items">

                {menuitems.map((item)=>{
                    return <li key = {item.id}>
    
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}


            </ul>
            <div className = "bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>




        </NavStyled>
    )
}


const NavStyled  = styled.nav``;





export default Navigation;