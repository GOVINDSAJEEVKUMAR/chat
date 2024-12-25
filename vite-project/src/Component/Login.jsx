import React, { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import '../../src/style.css'


const Login = ({ setUser }) => {
    const [usersname, setUsersname] = useState()
    console.log('Props received in Login:', { setUser });


    const handleUser = () => {
        if (usersname) {
            localStorage.setItem('user', usersname);
            setUser(usersname);
            localStorage.setItem('avatar', 'https://i.pinimg.com/736x/f1/92/4a/f1924a0762c56c3e43bd0bd526f2ab12.jpg');
        }
    };

    return (
        <>
            <div>
                <FaReact />
            </div>
            <div className="login-form">
                <input type="text" placeholder="Username"
                    onChange={(e) => setUsersname(e.target.value)}
                />
                <button onClick={handleUser}>Login</button>
            </div>
        </>
    )
}

export default Login
