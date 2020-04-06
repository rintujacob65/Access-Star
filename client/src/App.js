import React from 'react'

//material ui
import Container from '@material-ui/core/Container'


function App(props){
    return(
      <Container style=
                {{position: 'absolute',
                    width: '1349px',
                    height: '500px',
                    left: '0px',
                    top: '0px',
                    //background: '#2C2734'
                    }}>
                {/* <div style ={{
                    position: 'absolute',
                    width: '325px',
                    height: '476px',
                    left: '14px',
                    top: '12px',
                    backgroundImage : URL('')
                }}></div> */}
                <h1>Access Star</h1>
                {/* <Link to="/notes">Notes</Link>
                <Link to="/categories">Categories</Link> */}
            </Container>
     )
}
export default App