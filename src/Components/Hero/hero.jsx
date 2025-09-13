import React from 'react'
import { Typography ,Stack, Box, Button, Container } from '@mui/material'
import honeycombs from '../Hero/honeycombs.png'
function Hero() {
    return (
       <Container id="home">
        <Stack
        direction={{xs: 'column' , md: 'row'}}
        spacing={2}
        sx={
        {
            width: '100%',
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '85vh',
        }
        }
        >
            <Box
            sx={{
                width: {xs: '100%', md: '50%'},
                padding: '3rem 0',
                textAlign:'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '.5rem',
                alignItems: 'center'
            }}
            >
 <Typography variant="h1" sx={{ fontSize: {xs: '3rem'}, md: '4rem' }}>
              Honey for All
            </Typography>
 <Typography variant="h4" sx={{ fontSize: {xs: '1rem'}, md: '1.5rem' }}>
              The Honey revolution is start Now
            </Typography>
            <Button variant="contained" color='secondary' href="#coffee">Order Now</Button>
            </Box>
            <Box
             sx={{
                width: {xs: '50%'},
                padding: '2',
                textAlign:'center'
            }}>
                <img src={honeycombs} alt="honeycombs" 
                style={{width: '100%'}}
                />
            </Box>
        </Stack>

       </Container>
    )
}

export default Hero
