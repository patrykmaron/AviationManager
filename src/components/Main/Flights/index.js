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



export default () => {
        
    // Initial States
    const [flight, setFlight] = useState([]); // Flights
    const [pagination, setPagination] = useState({"offset":0,"limit":5,"total":0}); // Pagination
    const [loading, setLoader] = useState(true) // Suspense loader
    const [selected, setSelected] = useState([]);


    const [rotations, setRotations] = useContext(RotationContext);

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
    
    function handleSelect(flight){
        var arr = selected;
        if (selected.indexOf(flight) > -1) {
            var index = selected.indexOf(flight);    // <-- Not supported in <IE9
            
            if (index !== -1) {
                arr.splice(index, 1);
            }
            setSelected(arr)
        } else {
            arr = [...arr, flight]
            setSelected(arr)
        }

        rotations.map((item, i) => {
            if(item.selected === 1){
                var temp = rotations;
                temp[i].flights = arr;
                setRotations(temp);
                
            }
        })

    }

    
    
    return(
        <div>
            
                <List>
                    {
                        flight.map((item,i)=>{
                            return(
                                    <ListItem button onClick={() => handleSelect(item.id)} >
                                        <ListItemText primary={
                                            <Paper style={{minHeight: "1.5em", padding: 8, minWidth: "100%"}}>
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
                            })
                    }
                    
                </List>
                <div >
                    <TablePagination
                        component="nav"
                        page={pagination.offset}
                        rowsPerPage={pagination.limit}
                        count={pagination.total}
                        rowsPerPageOptions={[5,10,15,25,50,100]}
                        onChangePage={(obj,page) => {fetchUrl(page, pagination.limit)}}
                        onChangeRowsPerPage={(obj) => { fetchUrl(pagination.offset, obj.target.value)}}
                    />
                </div>
        </div>
    )
}
