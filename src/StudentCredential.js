import React, { useState } from 'react';
import './HomePage.css';
import './LoginPage.css'
import StudentCredentialInfo from './StudentCredentialInfo';
import Header from './Header';

const StudentCredential = ({logout }) => {
    const [inputList, setInputList] = useState({});
    const [items, setItems] = useState([]);
    function itemEvent(event, context) {
        setInputList({ ...inputList, [context]: event.target.value })
    }
    function ListOfItems() {
        let newItems=[...items,inputList];
        setItems(newItems)        
        setInputList({});
    }
    function deleteItem(id) {
        let newItems=items.filter((arrElem, index) => {
            return index !== id;
        });
        setItems(newItems);
    }
    return (
        <><div id="StudentMainBoxmain">
            <div id="StudentMainBox">
                <div id="StudentinfoBox">
                    <Header logout={logout} />
                    <table>
                        <tr>
                            <td>Roll No</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Standard</td>
                            <td>Mobile No.</td>
                            <td>Add / Delete </td>
                        </tr>
                        <tr>
                            <td><input type="text" className="inputs" value={(inputList && inputList.rollNo) || ""} onChange={(event) => {
                                itemEvent(event, "rollNo")
                            }} /></td>
                            <td><input type="text" className="inputs" value={(inputList && inputList.firstName) || ""} onChange={(event) => {
                                itemEvent(event, "firstName")
                            }} /></td>

                            <td><input type="text" className="inputs" value={(inputList && inputList.lastName) || ""} onChange={(event) => {
                                itemEvent(event, "lastName")
                            }} /></td>
                            <td><input type="text" className="inputs" value={(inputList && inputList.standard) || ""} onChange={(event) => {
                                itemEvent(event, "standard")
                            }} /></td>
                            <td><input type="text" className="inputs" value={(inputList && inputList.mobileNo) || ""} onChange={(event) => {
                                itemEvent(event, "mobileNo")
                            }} /></td>

                            <td><button type="submit" onClick={(ListOfItems)} className="button"  >Add Credential</button></td>
                        </tr>
                    </table>
                    <div>
                        {items.map((itemVal, index) => {
                            return (
                                <>
                                    <StudentCredentialInfo key={index} id={index} text={itemVal} onSelect={deleteItem} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>


        </>);
}

export default StudentCredential;