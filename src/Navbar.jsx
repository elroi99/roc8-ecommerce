import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function Navbar() {
    return (
        <AppBar >
            <Toolbar
                variant='subtitle1'
                color='text.secondary'
                component='div'
                sx={{ display: "flex", justifyContent: "center" }}
            >
                <Box sx={{ width: "70vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to="/">
                        <Typography> Products </Typography>
                    </Link>
                    <Link to="/cart">
                        <IconButton aria-label="delete">
                            <LocalMallIcon />
                        </IconButton>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
