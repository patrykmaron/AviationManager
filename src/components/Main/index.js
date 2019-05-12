/* 
* Main App Functionality
* 
*/
import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import Rotation from './Rotation';
import Flights from './Flights';
import Aircrafts from './Aircrafts';

export const RotationContext = React.createContext([{"aircraft":"A320","flights":[], "selected":1}]) // Creating "store" using context API

// How am I going to handle rotation:
// Select Aircraft, then add Flights to it untill 100% usage.
/**
 *      [{"aircraft":"","flights":[], "selected": 0}]
 */

function Main(props) {
    const [rotations, setRotations] = useState([{"aircraft":"","flights":[], "selected":1}]) // creating rotation array that can be accessed globally

        if(props.Visible === true){
            return (
                <RotationContext.Provider value={[rotations, setRotations]}> {/* Here we are proving the state store we created using Context API and Hook */}
                    <Grid container className="Main" lg={12} justify="center">
                        <Grid container lg={9} spacing={24}>
                            
                            <Grid item lg={4}>
                            <Typography variant="display1" align="center" className="animated bounceIn delay-3s">
                                Aircrafts
                            </Typography>
                                <Paper className="animated fadeInLeft delay-3s appBlock" elevation={8}>
                                    <Aircrafts />
                                </Paper>
                            </Grid>
                            <Grid item lg={4}>
                            <Typography variant="display1" align="center" className="animated bounceIn delay-3s">
                                Rotations
                            </Typography>
                                
                            <Rotation />

                            </Grid>
                            <Grid item lg={4}>
                                <Typography variant="display1" align="center" className="animated bounceIn delay-3s">
                                    Flights
                                </Typography>
                                <Paper  className="animated fadeInRight delay-3s appBlock" elevation={8}>
                                    <Flights
                                    
                                    />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </RotationContext.Provider>
            )
        } else {
            return(
                <section>

                </section>
            )
        }
       
    }

export default Main;
    
