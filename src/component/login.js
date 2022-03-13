import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, TextField, Button, makeStyles } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { postData, getData } from '../api/api'
import Main from './main'
import { render } from '@testing-library/react';

const useStyle = makeStyles((theme) => ({
    box: { width: '40rem', height: '20rem', border: 'solid black' },
    items: {
        width: '20rem ',
        textAlign: 'center',

    },

}))

const Login = (props) => {
    const classes = useStyle()
    const [UsersData, setUsersData] = useState([])
    const [User_name, setUser_name] = useState('')
    const [Password, setPassword] = useState('')
    const [Istrue, setIstrue] = useState(false)

    const getAlldata = async () => {
        let response = await getData()
        //console.log(response)
        setUsersData(response.data)
    }

    useEffect(() => {
        getAlldata()
    }, [])


    const logged = () => {

        for (var i = 0; i < UsersData.length; i++) {
            console.log(UsersData.length)
            if (UsersData[i].user_name == User_name && UsersData[i].password == Password) {
                console.log('log')

                setIstrue(true)

                break;
            }


        }

    }


    return (
        <>

            <Grid container lg={6} sm={6} xs={6} style={{ margin: '5%10%1%10%' }}  >
                <Grid item lg={6} sm={6} xs={6}>
                    <img style={{ margin: '5%10%1%20%', height: '90%', width: '90%' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9PRQel8jmUpKvlnpx2Ai7vsXRsI5tBUE_s5y3E6CNXMa0mmqXXzBpFhcz2DS0kPyu_V0&usqp=CAU' />


                </Grid>
                <Grid item lg={6} sm={6} xs={6}>
                    <Paper className={classes.box} style={{ margin: '5%0%1%30%' }}>
                        <Grid container lg={6} sm={6} xs={6} spacing={4} >

                            <Grid item lg={12} sm={6} xs={6} style={{ margin: '2%0%1%45%' }}>
                                <TextField required id="standard-required" label="User Name" className={classes.items} onChange={(e) => { setUser_name(e.target.value) }} />
                            </Grid>
                            <Grid item lg={12} sm={6} xs={6} style={{ margin: '2%0%1%45%' }} >
                                <TextField required id="standard-required" label="Password" className={classes.items} onChange={(e) => { setPassword(e.target.value) }} />
                            </Grid>

                            <Grid item lg={12} sm={6} xs={6} style={{ margin: '2%0%1%45%' }}>
                                {Istrue ? <Link to='/main'><Button color="secondary" variant="contained" className={classes.items} onClick={() => { logged() }}>Log in</Button></Link> : <Button color="secondary" variant="contained" className={classes.items} onClick={() => { logged() }}>Log in</Button>}
                            </Grid>
                            <Grid item lg={12} sm={6} xs={6} style={{ margin: '2%0%1%45%' }}>
                                <Link to='/reg'><Button color="primary" variant="contained" className={classes.items} >Register Now</Button></Link>
                            </Grid>
                        </Grid>

                    </Paper>
                    <p style={{ fontSize: 'x-large', marginLeft: '40%' }}>Register/log in to know our facility .</p>
                </Grid>
            </Grid>
        </>

    )

}
export default Login
