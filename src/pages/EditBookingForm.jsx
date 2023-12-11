import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

const createBooking = (firstName, lastName, address, city, trainState, pincode) => {
    console.log(firstName, lastName, address, city, trainState, pincode);
}

const EditBookingForm = ({fid, closeEvent}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('');
    const [trainState, setTrainState] = useState('');
    const [pincode, setPincode] = useState('');

    useEffect (()=>{
        console.log(fid);
        setFirstName(fid.firstName);
        setLastName(fid.lastName);
        setAddress(fid.address);
        setCity(fid.city);
        setTrainState(fid.trainState);
        setPincode(fid.pincode);
    },[])

  return (
    <>
        <Box sx={{m: 2}}/>
        <Typography variant='h5' align='center'>
            Edit Booking
        </Typography>
        <IconButton style={{position: "absolute", top: "0", right: "0"}}
        onClick={closeEvent}
        >
            <CloseIcon />
        </IconButton>
        <Box height={20}/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Address" variant="outlined" size='small'
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="City" variant="outlined" size='small'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="State" variant="outlined" size='small'
            value={trainState}
            onChange={(e)=>setTrainState(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Pincode" variant="outlined" size='small'
            value={pincode}
            onChange={(e)=>setPincode(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5' align='center'>
                    <Button variant='contained' onClick={createBooking(firstName, lastName, address, city, trainState, pincode)}>
                        Submit
                    </Button>
                </Typography>
            </Grid>
        </Grid>
        <Box sx={{m: 4}}/>
    </>
  )
}

export default EditBookingForm;