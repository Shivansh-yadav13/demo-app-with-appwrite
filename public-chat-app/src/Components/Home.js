import React, { useState } from 'react'
import { account } from '../Services/appwriteConfig'
import Button from '@mui/material/Button';

import { useHistory, Link } from 'react-router-dom';

function Home() {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState();

    const userData = account.get();
    try {
        setUserInfo(userData);
    } catch (event) {
        console.log(event.message);
    }

    const logUserOut = async (event) => {
        event.preventDefault();
        try {
            await account.deleteSession('current');
            setUserInfo();
            history.push('/login');
        } catch (event) {
            console.log(event.message);
        }
    };

    if (userInfo) {
        return (
            <>
            <p>USERNAME: {userInfo.name}</p>
            <p>EMAIL: {userInfo.email}</p>
            <Button variant="contained" color="warning" onClick={logUserOut}>Logout</Button>
            </>
        );
    } else {
        return ( <h1>No User Logged In! <Link to="/login">Login</Link> </h1> );
    }
};

export default Home;