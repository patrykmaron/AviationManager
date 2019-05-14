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

        return(
            <div>
                <RotationContext.Consumer>
                   {
                       (context) => 
                        context.state[0].flights.map((item, i) => 
                            (
                            <Paper  className="animated fadeInUp appBlockCard" elevation={4}>
                            <Typography>
                                Flight: {item.id}
                            </Typography>
                            
                            <Grid lg={12} container>
                                <Grid item lg={5}>
                                    <Typography variant="h5">
                                        {item.origin}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {item.readable_departure}
                                    </Typography>
                                </Grid>
                                <Grid item lg={2} justify="center">
                                    <ArrowIcon style={{fontSize: "3.5em",}}/>
                                </Grid>
                                <Grid item lg={5} alignContent="right" justify="flex-end">
                                                
                                    <Typography variant="h5" align="right">
                                         {item.destination}
                                    </Typography>
                                    <Typography variant="subtitle1" align="right">
                                         {item.readable_arrival}
                                    </Typography>
                                </Grid>
                            </Grid>
                            </Paper>
                        )
                       
                    )
                   } 
                </RotationContext.Consumer>
                
            </div>
            
        )
}