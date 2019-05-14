/**
 * Flights Component
 * Using Hooks
 * 
*/

import React, { useState, useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowIcon from '@material-ui/icons/ArrowRightAlt';


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";

// Get rotation state
import { RotationContext } from '../../Main';
import Rotation from '../Rotation';



export default () => {
        
    // Initial States
    const [flight, setFlight] = useState([]); // Flights
    const [pagination, setPagination] = useState({"offset":0,"limit":4,"total":0}); // Pagination
    const [loading, setLoader] = useState(true) // Suspense loader
    const [selected, setSelected] = useState([]);

    // Fetch and set

    async function fetchUrl(offset,limit) {
        setLoader(true)
        const url = new URL('https://infinite-dawn-93085.herokuapp.com/flights');
        let params = {offset:offset, limit:limit};

        url.search = new URLSearchParams(params);

        const response = await fetch(url);
        const json = await response.json();

        setPagination(json.pagination);
        setFlight(json.data);
        setLoader(false)


     
    }

    useEffect(() => {
        fetchUrl(pagination.offset, pagination.limit);
    }, []);
    
   
    function calcUsage(currentFlights, newFlight){ // this could be done cleaner
        
        var arr = []

        if(currentFlights.length > 0){
            currentFlights.map((item,i) => {
                item.map((data, i) => {
                    arr.push((data.arrivaltime - data.departuretime))
                })
            
            })
        }
        if (arr.length > 0){
            arr.push((newFlight.arrivaltime - newFlight.departuretime))
        } else {
            arr = [(newFlight.arrivaltime - newFlight.departuretime)]
        }
        const sum = arr.reduce(add,0)
        
        function add(accumulator, a){
            return accumulator + a
        }

        return Math.round((sum / 86400) * 100) // rounding to the nearest interger
       
    }
    
    return(
        
        <div>
            
                <List>
                    {
                        flight.map((item,i)=>{
                           
                            return(
                                <RotationContext.Consumer>
                                    {
                                        (context) => (
                                            <ListItem button onClick={() => context.eventTrigger([{"aircraft":"GABCD","flights":[...context.state[0].flights, item], "selected":1, "usage":calcUsage([context.state[0].flights],item)}])} >
                                            <ListItemText primary={
                                                <Paper style={{minHeight: "0.7em", padding: 5, minWidth: "100%"}}>
                                                    <Typography variant="title" align="center">
                                                        {item.id}
                                                    </Typography>
                                                    <Grid lg={12} container>
                                                        <Grid item lg={5}>
                                                            <Typography variant="subtitle1">
                                                                {item.origin}
                                                            </Typography>
                                                            <Typography variant="subtitle2">
                                                                {item.readable_departure}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item lg={2} alignContent="center">
                                                            <ArrowIcon style={{fontSize: "3em",}}/>
                                                        </Grid>
                                                        <Grid item lg={5} alignContent="right" justify="flex-end">
                                                                        
                                                            <Typography variant="subtitle1" align="right">
                                                                {item.destination}
                                                            </Typography>
                                                        <Typography variant="subtitle2" align="right">
                                                                {item.readable_arrival}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                            } />
                                        </ListItem>
                                        )
                                    }
                                </RotationContext.Consumer>
                                
                                     
                                        )
                                 
                                   
                                
                            })
                    }
                    
                </List>
                <div >
                    <TablePagination
                        component="nav"
                        page={pagination.offset}
                        rowsPerPage={pagination.limit}
                        count={pagination.total}
                        rowsPerPageOptions={[4,10,15,25,50,100]}
                        onChangePage={(obj,page) => {fetchUrl(page, pagination.limit)}}
                        onChangeRowsPerPage={(obj) => { fetchUrl(pagination.offset, obj.target.value)}}
                    />
                </div>
        </div>
    )
}
