import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton"
import './bg.css'



const Coursal = () => {

    return (
        <div>
            <div style={{ margin: '100 0 0 0px' }}>
                <Carousel className='era' disableArrowsOnEnd>
                    <div style={{ height: '400px' }}>
                        <h1 style={{ marginTop: '120px' }}>The art of medicine consists in amusing the patient while nature cures the disease.</h1>
                        <h2>Schedule a Free Consultation
                            or call us at
                            (818) 230-7778</h2>
                        <div style={{ marginLeft: '35%' }}><TextField
                            label="search"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        /></div>
                    </div>


                </Carousel>

            </div>

        </div>
    )
}

export default Coursal