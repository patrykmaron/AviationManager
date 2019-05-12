/* 
* Main App Functionality
* 
*/
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowIcon from '@material-ui/icons/ArrowRightAlt';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Visible : props.Visible,
        }; 
    }   

    // React doesn't like passing parent state to child component
    // componentWillReceiveProps solves this.
    // This is because constructor only happens once when componenet renders.
    // We need to pass new initial state for this.
    componentWillReceiveProps(nextProps) { 
        this.setState({ Visible: nextProps.Visible });  
    }

    render(){
        if(this.state.Visible === true){
            return (
                <Grid container className="Main" lg={12} justify="center">
                    <Grid container lg={9} spacing={24}>
                        
                        <Grid item lg={4}>
                        <Typography variant="display1" align="center" className="animated bounceIn delay-3s">
                            Aircrafts
                        </Typography>
                            <Paper className="animated fadeInLeft delay-3s appBlock" elevation={8}>
                                Paper 1
                            </Paper>
                        </Grid>
                        <Grid item lg={4}>
                        <Typography variant="display1" align="center" className="animated bounceIn delay-3s">
                            Rotations
                        </Typography>
                            <Paper  className="animated fadeInUp delay-3s appBlockCard" elevation={4}>
                            <Typography>
                                        Flight: AS1001
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
                            <Paper  className="animated fadeInUp delay-3s appBlockCard" elevation={4}>
                            <Typography>
                                        Flight: AS1001
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
                            <Paper  className="animated fadeInUp delay-3s appBlockCard" elevation={4}>
                            <Typography>
                                        Flight: AS1001
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
                            <Paper  className="animated fadeInUp delay-3s appBlockCard" elevation={4} >
                                    <Typography>
                                        Flight: AS1001
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
                        </Grid>
                        <Grid item lg={4}>
                            <Typography variant="display1" align="center" className="animated bounceIn delay-3s">
                                Flights
                            </Typography>
                            <Paper  className="animated fadeInRight delay-3s appBlock" elevation={8}>
                                Paper 3
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            )
        } else {
            return(
                <section>

                </section>
            )
        }
       
    }
    
}
