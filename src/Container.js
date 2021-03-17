import React, { useState } from 'react';
import LoginPage from './LoginPage';
import StudentCredential from './StudentCredential';
import './HomePage.css';


const Container=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    function login(Username,password) {
        if(Username==password){
            setIsLoggedIn(true)
        }   
        
    }
    function logout() {
        setIsLoggedIn(false)
    }

    var viewToRender=null;

    if(isLoggedIn){
        viewToRender=<StudentCredential logout={logout}/>}
       else {
        viewToRender=<LoginPage login={login} />
        }
 
    return(
        
        viewToRender
        )
    }

export default Container;

