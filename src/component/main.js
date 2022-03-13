import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles, Select
} from "@material-ui/core"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Coursal from './carousal'
import Footer from './footer';
import Cards from './card'

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    size: { marginLeft: "100px", color: "orange" },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

const Main = () => {
    const classes = useStyles();



    return (
        <div>
            <AppBar position="static">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        Logo
                    </Typography>
                    <div className={classes.navlinks}>

                        <InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Medical Test</InputLabel>
                        <Select>
                            <MenuItem value={10}>CT-Scan</MenuItem>
                            <MenuItem value={20}>Urine test</MenuItem>
                            <MenuItem value={30}>MRI</MenuItem>
                        </Select>
                        <Typography className={classes.size}>Take Appoinment</Typography>
                        <a href='###' className={classes.link}>sign In/login</a>
                    </div>
                </Toolbar>
            </AppBar>

            <Coursal />
            <Cards />
            <Footer />


        </div>
    )
}


export default Main
