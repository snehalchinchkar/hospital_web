import React, {useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const usestyles = makeStyles({
  card: {
    maxWidth: 200,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 150,
  },
});

const Cards=()=> {

 const data=[{title:'Invocell',des:'At the beginning of this treatment you will be prescribed medications to help your body',price:'29,000 INR',url:'https://secureservercdn.net/198.71.233.179/n0q.726.myftpupload.com/wp-content/uploads/2019/07/ivf-back.png'},
 {title:'IVF Programs',des:' The Process of In Vitro Fertilization IVF in the uterus in the uterus',price:'45,000 INR',url:'https://secureservercdn.net/198.71.233.179/n0q.726.myftpupload.com/wp-content/uploads/2019/07/IUI-Programs.png'},
 {title:'IUI Programs',des:' IUI, also known as artificial insemination, is the process where a concentrated specimen of sperm is placed .',price:'39,000 INR',url:'https://secureservercdn.net/198.71.233.179/n0q.726.myftpupload.com/wp-content/uploads/2019/07/Egg-Freezing.png'},
 {title:'Tubal Reversals',des:' At the beginning of this treatment you will be prescribed medications to help your body',price:'24,000 INR',url:'https://secureservercdn.net/198.71.233.179/n0q.726.myftpupload.com/wp-content/uploads/2019/07/Tubal-Reversals.png'}]

 

  const classes =usestyles()

  return (
    <div style={{marginTop:'30px'}}>
    <h1 >widget – Treatment Options</h1>
      <Container style={{margin:"100 0 0 0"}}>
        
        <Grid container spacing={1}>
          {data.map((character) => (
            <Grid item xs={12} sm={3} key={character}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={character.url}
                />
                <CardContent>
                  <Typography color="primary" variant="h5">
                    {character.title}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2" style={{color:'orange'}}>
                    {character.des}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2" style={{color:'black'}}>
                    {character.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Cards;