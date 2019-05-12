/**
 *  Intro title
 * 
 * 
*/

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function IntroTitle(props){
        return (
            <Grid container lg={12} alignItems="center" style={{paddingTop: 120}} className={"animated " +  (props.Visible ? "zoomOutDown delay-1s" : "fadeInDown")}>
                <Grid item lg={2} xs={0} /> 
                    <Grid item lg={8} xs={12} alignContent="center">
                        <Typography variant="h2" style={{fontWeight: 800}} align="center">
                                {props.Title}
                        </Typography>
                        <Typography variant="h5" align="center" className="animated pulse delay-1s">
                                {props.Subtitle}
                        </Typography>
                    </Grid>
                <Grid item lg={2} xs={0} />
            </Grid>
        
        )


}

export default IntroTitle