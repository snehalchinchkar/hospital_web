
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import { Button, Paper, FormControl, FormGroup } from "@material-ui/core";
import { postData, getData } from '../api/api'
import { useHistory } from 'react-router'

const initalValue = {
  user_name: '',
  mobile_no: '',
  email: '',
  password: ''
}

const Register = () => {
  const [info, setInfo] = useState(initalValue)
  const history = useHistory()
  const [Users, setUsers] = useState([])

  console.log(info, 'info')

  const getAlldata = async () => {
    let response = await getData()
    //console.log(response)
    setUsers(response.data)

  }

  useEffect(() => {
    getAlldata()
  }, [])
  console.log(Users, 'user')
  const handleSubmit = async () => {
    if (info.user_name == '' || info.mobile_no == '' || info.password == '' || info.email == '') {
      alert('Please Enter all necessary data')
    }
    else {
      for (var i = 0; i < Users.length; i++) {
        if (Users[i].user_name == info.user_name && Users[i].password == info.password) {
          alert("User Name and password already  register used another password or login")
          break;
        }
        else {
          await postData(info)
          history.push('./')
          console.log(info.email)
          break;
        }
      }


    }


  }

  return (
    <div>

      <h1 style={{ color: 'red' }}>Patient Registration</h1>



      <Paper style={{ marginLeft: '3%', marginRight: '3%' }}>

        <h2 style={{ textAlign: 'center' }}>Information</h2>
        <div style={{ marginLeft: '3%', marginBottom: '2%' }}>


          <div >
            <h3 style={{ marginRight: '5%', marginTop: '3%', float: 'left' }}>User Name :</h3>

            <TextField
              required
              id="outlined-required"
              label="Required"
              variant="outlined"
              style={{ width: '30%', marginTop: '3%' }}
              name="user_name" onChange={(e) => { setInfo({ ...info, [e.target.name]: e.target.value }) }} />
          </div>



          <div>

            <h3 style={{ marginRight: '5%', marginTop: '3%', float: 'left' }}>mobile No :</h3>
            <TextField
              required
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              style={{ width: '30%', marginTop: '3%' }}
              name="mobile_no" onChange={(e) => { setInfo({ ...info, [e.target.name]: e.target.value }) }} />

          </div>


          <div>

            <h3 style={{ marginRight: '5%', marginTop: '3%', float: 'left' }}>Email Id :</h3>
            <TextField
              required
              id="outlined-required"
              label="Email"
              variant="outlined"
              style={{ width: '30%', marginTop: '3%' }}
              name="email" onChange={(e) => { setInfo({ ...info, [e.target.name]: e.target.value }) }} />

          </div>



          <div>

            <h3 style={{ marginRight: '5%', marginTop: '3%', float: 'left' }}>password :</h3>
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              style={{ width: '30%', marginTop: '3%' }}
              name="password" onChange={(e) => { setInfo({ ...info, [e.target.name]: e.target.value }) }} />

          </div>


          <Button variant="outlined" color="secondary" onClick={() => handleSubmit()} style={{ marginLeft: '20%', marginBottom: '2%', marginTop: '2%' }}>
            Submit
          </Button>

        </div>

      </Paper>



    </div>
  )
}

export default Register
