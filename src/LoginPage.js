import React, { useState } from 'react';
import './LoginPage.css';
import './HomePage.css';

const LoginPage = ({ login }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [invalidUser, setInvalidUser] = useState('');

    function invalidUsers() {
        if (user !== pass) {
            setInvalidUser("Invaid User");
        }
        else {
            login(user, pass);
        }
    }
    return (
        <>
            <div id="particles-js">
                <div id="container">
                    <div class="my-form">
                        <h3> Login </h3>
                        <div class="form-group">
                            <input type="text" name="USERNAME" placeholder="USERNAME" value={user} onChange={(event) => {
                                setUser(event.target.value);
                            }} />
                        </div>
                        <div class="form-group">
                            <input type="Password" name="Password" placeholder="PASSWORD" value={pass} onChange={(event) => {
                                setPass(event.target.value)
                            }} />
                        </div>
                        <input class="button" type="submit" value="Login" name="" onClick={() => { invalidUsers(); }} />
                        <h3>{invalidUser}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;