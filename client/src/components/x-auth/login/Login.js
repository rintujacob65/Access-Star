import React, { Component } from 'react'
import '../../../App.css'
import '../login/Login.css'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid, TextField, Card, CardContent,Button } from '@material-ui/core/'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email : '',
             password : ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : this.state.email,
            password : this.state.password
        }
        console.log("formdata",formData)
    }
    
    render() {
        const { email , password} = this.state
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Grid item xs={12} className="Home">
                        <Card className="Home-login" >
                            <CardContent>
                                <h2 className="Login-h2">LOGIN</h2>
                                <Card className="Login-outer">
                                    <CardContent>
                                        <TextField 
                                        label = "Email"
                                        onChange={this.handleChange}
                                        name = "email"
                                        />
                                    <br/>
                                    <TextField 
                                        type = "password"
                                        label = "Password"
                                        onChange={this.handleChange}
                                        name = "password"
                                        />
                                    <br/>
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        className = "Login-button " >
                                            Login
                                    </Button>

                                    </CardContent>
                                </Card>
                                <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item className="Register-label">
                                    {/* <Link to = "/signup" > */}
                                    Don't have an account? 
                                    <label style={{color:"#EF667A"}}>Register</label>
                                    {/* </Link> */}
                                </Grid>
                            </Grid>
                               
                            </CardContent>
                        </Card>
                     </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default withRouter(connect()(Login))
