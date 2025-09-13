import React, { useState } from 'react'
import { AppBar, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, Typography, Container, Box, Drawer, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { useTheme } from '@mui/material/styles'  

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))   // ✅ FIXED

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const drawerLinks = [   
    { text: "Home", link: "#home" },
    { text: "Honey Products", link: "#honey products" }
  ]

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Container>
          <Toolbar>
            <EmojiNatureIcon />
            <Typography variant="h5" sx={{ flexGrow: 1, fontFamily: 'Eagle Lake, serif' }}>
              Honey
            </Typography>

            {isMobile && (
              <IconButton color='inherit' onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}

            {!isMobile && (
              <>
                <Button color="inherit" href="#home">Home</Button>
                <Button color="inherit" href="#honey products">Honey Products</Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {drawerLinks.map((linkItem, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  href={linkItem.link}
                  onClick={toggleDrawer(false)}
                  aria-label={`Navigate to ${linkItem.text}`}
                >
                  <ListItemText primary={linkItem.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
