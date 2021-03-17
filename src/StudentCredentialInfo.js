import React from 'react';
import './HomePage.css';
const StudentCredentialInfo = ({ text, onSelect, id }) => {
    return (
        <>
            <table>
                <tr>
                    <td>{text.rollNo}</td>
                    <td>{text.firstName}</td>
                    <td>{text.lastName}</td>
                    <td>{text.standard}</td>
                    <td>{text.mobileNo}</td>
                    <td> <button className="inputs" onClick={() => { onSelect(id) }}>Delete</button> </td>
                    {/* id="userinfo5" */}
                </tr>
            </table>

        </>
    )
}

export default StudentCredentialInfo;

//   {/* <div id="EmployeeCredentialInfobox">
//         <button id="userinfo5" onClick={()=>{onSelect(id)}}>Delete</button>     
//             <div id="userinfo1">{text.name}</div>
//             <div id="userinfo2">{text.id}</div>
//             <div id="userinfo3">{text.username}</div>
//             <div id="userinfo4">{text.password}</div>
//             </div> */}
