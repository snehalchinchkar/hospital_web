import React from 'react'
import { Box,Container,Grid,Link ,Paper} from '@material-ui/core'
import { BorderAll } from '@material-ui/icons'
//import { experimentalStyled as styled } from '@mui/material/styles'

const Footer = () => {
    const Item=["About",'Faqs','Facebook','Googleplus','Booknow','Contact','Twitter','youtube',"offers",'support','Rudy Quintero, MD','','Terms&condition','policy']
    
    return (
        <div style={{border:'solid' ,marginTop:'10px',backgroundColor: '#e9ebeadb'}}>

        <Box sx={{ marginLeft:'20px' ,flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={4} sm={3} md={3}>
            <span><h4>Hospital</h4></span>
          </Grid>
      <Grid item xs={4} sm={3} md={3}>
            <span><h4>Help</h4></span>
          </Grid>
          <Grid item xs={4} sm={3} md={3}>
            <span><h4>Follw us On</h4></span>
          </Grid>
          <Grid item xs={4} sm={3} md={3}>
            <span></span>
          </Grid>
        {Item.map((ele, index) => ( 

          <Grid item xs={4} sm={3} md={3}>
            <span>{ele}</span>
          </Grid>
        ))}
      </Grid>
    </Box>
  
           
        </div>
    )
}

export default Footer