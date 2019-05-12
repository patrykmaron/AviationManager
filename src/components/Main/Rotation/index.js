/**
 * Rotation Component
 * I am attempting to use Hooks and functional comp only
 * More lightweight
 * 
 */


import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowIcon from '@material-ui/icons/ArrowRightAlt';

import { RotationContext } from '../../Main'



export default () => {
        const [rotations, setRotations] = useContext(RotationContext);

        return(
            <div>
                {rotations.map((item, i) => { 
                    return(
                    <Paper  className="animated fadeInUp delay-3s appBlockCard" elevation={4}>
                    <Typography>
                        Flight: Some flight {+ " " + i} 
                    </Typography>
                    
                    <Grid lg={12} container>
                        <Grid item lg={5}>
                            <Typography variant="h5">
                                LND
                            </Typography>
                            <Typography variant="subtitle1">
                                2:00
                            </Typography>
                        </Grid>
                        <Grid item lg={2} justify="center">
                            <ArrowIcon style={{fontSize: "3.5em",}}/>
                        </Grid>
                        <Grid item lg={5} alignContent="right" justify="flex-end">
                                        
                            <Typography variant="h5" align="right">
                                LND
                            </Typography>
                            <Typography variant="subtitle1" align="right">
                                2:00
                            </Typography>
                        </Grid>
                    </Grid>
                    </Paper>
                )
                   
                })}
            </div>
            
        )
}