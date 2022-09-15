import React from 'react';
import logo from '../../img/logo.png';
import { Typography, Box } from '@mui/material'

const Header = () => {
    return (
        <Box sx={{height: 80, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0CF2B4"}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h5" sx={{marginLeft: "7px", color: "white", fontWeight: 600}}>Healtech</Typography>
            </Box>
        </Box>
    )
}

export default Header