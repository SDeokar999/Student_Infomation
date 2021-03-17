import React from 'react';
import './HomePage.css';

const Header=({logout})=>{

return(
<div id="header">
    <div id="StudentInfo">Student Information</div>
    <div id="logout" onClick={logout}>Logout</div>
</div>)

}
export default Header;