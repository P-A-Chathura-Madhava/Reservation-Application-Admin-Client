import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

const createTrain = (number, name, route, trainClass, seats) => {
    console.log(number, name, route, trainClass, seats);
}

const EditTrainForm = ({fid, closeEvent}) => {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [seats, setSeats] = useState();

    useEffect (()=>{
        console.log(fid);
        setNumber(fid.number);
        setName(fid.name);
        setFrom(fid.from);
        setTo(fid.to);
        setSeats(fid.seat);
    },[])

  return (
    <>
        <Box sx={{m: 2}}/>
        <Typography variant='h5' align='center'>
            Edit Train
        </Typography>
        <IconButton style={{position: "absolute", top: "0", right: "0"}}
        onClick={closeEvent}
        >
            <CloseIcon />
        </IconButton>
        <Box height={20}/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Number" variant="outlined" size='small'
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Name" variant="outlined" size='small'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="From" variant="outlined" size='small'
            value={from}
            onChange={(e)=>setFrom(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="To" variant="outlined" size='small'
            value={to}
            onChange={(e)=>setTo(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Seats" variant="outlined" size='small'
            value={seats}
            onChange={(e)=>setSeats(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5' align='center'>
                    <Button variant='contained' onClick={createTrain(number, name, from, to, seats)}>
                        Submit
                    </Button>
                </Typography>
            </Grid>
        </Grid>
        <Box sx={{m: 4}}/>
    </>
  )
}

export default EditTrainForm;