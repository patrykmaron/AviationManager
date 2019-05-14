/**
 * Aircrafts Component
 * Using Hooks
 * 
*/

import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowIcon from '@material-ui/icons/ArrowRightAlt';


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";
import Button from "@material-ui/core/Button"

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { RotationContext } from '../../Main'


export default () => {
        
    // Initial States
    const [aircraft, setAircraft] = useState([]); // Aircrafts
    const [pagination, setPagination] = useState({"offset":0,"limit":5,"total":0}); // Pagination
    const [loading, setLoader] = useState(true) // Suspense loader
    const [open, setModal] = useState(false) // Modal
    const [newAircraft, setNewAircraft] = useState({"ident":"","type":"A320","economySeats":0,"base":""}) // Add Aircraft

    // Fetch and set

    async function fetchUrl(offset,limit) {
        setLoader(true)
        const url = new URL('https://infinite-dawn-93085.herokuapp.com/aircrafts');
        let params = {offset:offset, limit:limit};

        url.search = new URLSearchParams(params);

        const response = await fetch(url);
        const json = await response.json();

        setPagination(json.pagination);
        setAircraft(json.data);
        setLoader(false)

     
    }

    useEffect(() => {
        fetchUrl(pagination.offset, pagination.limit);
    }, []);

    function addAircaft(){
        setAircraft([...aircraft, newAircraft])
        setModal(false)
    }


    return(
        <div>
             <Dialog
                open={open}
                onClose={() => {setModal(false)}}
                aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Aircraft</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        To add a new Aircraft into the database, fill out the details and click Add
                        </DialogContentText>
                        <TextField
                        
                       
                        id="name"
                        label="Aircraft Identification"
                        type="text"
                        fullWidth
                        onChange={(obj)=>{setNewAircraft({"ident":obj.target.value,"type":newAircraft.type,"economySeats":newAircraft.economySeats,"base":newAircraft.base})}}
                        />
                        <TextField
                        
                        
                        id="seats"
                        label="Number of seats"
                        type="number"
                        fullWidth
                        onChange={(obj)=>{setNewAircraft({"ident":newAircraft.ident,"type":newAircraft.type,"economySeats":obj.target.value,"base":newAircraft.base})}}
                        />
                        <TextField
                        
                        onChange={(obj)=>{setNewAircraft({"ident":newAircraft.ident,"type":newAircraft.type,"economySeats":newAircraft.economySeats,"base":obj.target.value})}}
                        id="base"
                        label="Base of Aircraft"
                        type="string"
                        fullWidth
                        />
                        <Select
                            value={"A320"}
                            onChange={(obj)=>{setNewAircraft({"ident":newAircraft.ident,"type":obj.target.value,"economySeats":newAircraft.economySeats,"base":newAircraft.base})}}
                            inputProps={{
                            name: 'aircraftType',
                            id: 'aircraft-Type',
                            }}
                        >
                            <MenuItem value={"A320"}>A320</MenuItem>
                        </Select>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {setModal(false)}} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={() => {addAircaft()}} color="primary">
                        Add
                        </Button>
                    </DialogActions>
                </Dialog>
            
                <List>
                    {
                        aircraft.map((item,i)=>{
                            return(
                                <RotationContext.Consumer>
                                    {(context) => (
                                         <ListItem button >
                                         <ListItemText primary={
                                             <Paper style={{minHeight: "1.5em", padding: 8, minWidth: "100%"}}>
                                                 <Typography variant="title" align="center">
                                                     {item.ident}
                                                 </Typography>
                                                 <Grid lg={12} container>
                                                     <Grid item lg={5}>
                                                         <Typography variant="subtitle1">
                                                             {item.type}
                                                         </Typography>
                                                         <Typography variant="subtitle2">
                                                             {item.economySeats}
                                                         </Typography>
                                                     </Grid>
                                                     <Grid item lg={2} alignContent="center">
                                                         <ArrowIcon style={{fontSize: "3em",}}/>
                                                     </Grid>
                                                     <Grid item lg={5} alignContent="right" justify="flex-end">
                                                                     
                                                         <Typography variant="subtitle1" align="right">
                                                             {item.base}
                                                         </Typography>
                 
                                                     </Grid>
                                                 </Grid>
                                                usage: {context.state[0].usage + "%"}
                                             </Paper>
                                         } />
                                     </ListItem>
                                    )}
                                </RotationContext.Consumer>
                                   
                                )
                            })
                    }
                    
                </List>
                
                <TablePagination
                    component="nav"
                    page={pagination.offset}
                    rowsPerPage={pagination.limit}
                    count={pagination.total}
                    rowsPerPageOptions={[5,10,15,25,50,100]}
                    onChangePage={(obj,page) => {fetchUrl(page, pagination.limit)}}
                    onChangeRowsPerPage={(obj) => { fetchUrl(pagination.offset, obj.target.value)}}
                    style={{bottom: 0,position: "absolute"}}
                />
                <Button primary style={{bottom: 9, position: "absolute", right:0,}} onClick={() => {setModal(true)}}>
                    Add Aircraft
                </Button>
          
            
        </div>
    )
}
