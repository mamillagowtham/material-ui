import React from 'react'
import Button from "@mui/material/Button";
import Dice from './Dice';

const App = () => {
  return (
    <>
    <Button variant = "contained" sx={{color: "red" , border:  "20px solid grey" ,typography: "h2"}}>App</Button>
    <Button disabled sx={{ ".Mui-disabled" : {color : "red"}}}> click me </Button>
    <Button variant='contained' color= "warning" >add me</Button>
    <Dice  roll ="6"/>

    </> 
  )
}

export default App