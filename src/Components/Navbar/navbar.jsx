import React from 'react'
import { useState } from 'react'
import {AppBar, Toolbar} from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CoffeeIcon from '@mui/icons-material/Coffee';
import { useTheme } from '@emotion/react'
import { Box, Drawer, useMediaQuery } from '@mui/material'
function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false )
    const theme =useTheme()

    // const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const toggleDrawer = (open) => ()=>{
        setDrawerOpen(open)
    }

    const drawerLinks = [
        {

            text: "home",
            link: "#home",
            text: "Coffee",
            link: "#Coffee",
        }
    ]

    return (
        <>
        <AppBar position="sticky" color="primary">
            <Container>
              <Toolbar>
                <CoffeeIcon/>
            <Typography variant="h5" sx={{flexGrow: 1,fontFamily: 'Eagle Lake, serif'}}>
              coffee
            </Typography>
             <Button  color="inherit" href="home">
              Home
            </Button>
             <Button  color="inherit" href="home">
              Coffee
            </Button>
          </Toolbar>
            </Container>
        </AppBar>

        <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box>
            </Box>
        </Drawer>
        </>
    )
}

export default Navbar;

