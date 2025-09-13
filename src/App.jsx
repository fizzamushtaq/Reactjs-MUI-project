
import "@fontsource/roboto";
import './App.css'
import Navbar from "./Components/Navbar/navbar.jsx";
import theme from "./assets/theme.js";
import { ThemeProvider } from "@mui/material";
import Hero from "./Components/Hero/hero.jsx";
import Honey from "./Components/Honey/honey.jsx";
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
       <Navbar/>
       <Hero/>
       <Honey/>
       
    </ThemeProvider>
   
    </>
  )
}

export default App
