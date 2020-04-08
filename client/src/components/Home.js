import React from 'react'
import '../App.css'
import Grid from '@material-ui/core/Grid'

function Home(){
    return(
        <Grid container className="Home">
            <Grid item xs={5} sm={3} className="Image-background ">
                {/* <Grid className="Image"></Grid> */}
            </Grid>
            <Grid item xs={1} className="Sidebar"/>
            <Grid item xs={10}>
               <Grid className="Access-star">
                    <h2 className="h2-font">Access Star</h2>
               </Grid>
               <Grid className="login">

               </Grid>
            </Grid>
           
        </Grid>
        // <Grid container className="Home">
        //     <Grid item xs={4}/>
        //     <Grid item xs={2}/>
        //     <Grid item xs={10}></Grid>
        // </Grid>
    ) 
}

export default Home
