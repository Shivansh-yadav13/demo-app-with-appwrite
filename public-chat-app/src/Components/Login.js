import React from 'react';

import { account } from '../Services/appwriteConfig';

import { TextField } from '@mui/material';
import { InputLabel } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { FormControl } from '@mui/material';
import { IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const loginUser = async (event) => {
        event.preventDefault();
            await account.createSession(values.email, values.password);
        try {
            history.push('/')
        } catch (event) {
            console.log(event.message);
        }
    };

    return (
        <div className="div-signup">
            <div className="text">
            <h1>PUBLIC CHAT APP</h1>
            <p>Don't have an account? <Link to="/signup">Signup</Link> </p>
            </div>
            <TextField required id="outlined-basic" label="Email" variant="outlined" value={values.email} onChange={handleChange('email')} />
            <FormControl variant="outlined">
                <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <Button variant="contained" size="large" onClick={loginUser}>Login</Button>
        </div>
    );
};

export default Login;