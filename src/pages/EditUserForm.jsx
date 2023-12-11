import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

const createUser = (name, newEmail, mobile) => {
    console.log(name, newEmail, mobile);
}

const EditForm = ({fid, closeEvent}) => {
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('')
    const [mobile, setMobile] = useState('');

    useEffect (()=>{
        console.log(fid);
        setName(fid.name);
        setNewEmail(fid.email);
        setMobile(fid.mobile);
    },[])

  return (
    <>
        <Box sx={{m: 2}}/>
        <Typography variant='h5' align='center'>
            Edit User
        </Typography>
        <IconButton style={{position: "absolute", top: "0", right: "0"}}
        onClick={closeEvent}
        >
            <CloseIcon />
        </IconButton>
        <Box height={20}/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Name" variant="outlined" size='small'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Email" variant="outlined" size='small'
            value={newEmail}
            onChange={(e)=>setNewEmail(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
            <TextField id="outlined-basic" label="Mobile" variant="outlined" size='small'
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            sx={{minWidth: "100%"}} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5' align='center'>
                    <Button variant='contained' onClick={createUser(name, newEmail, mobile)}>
                        Submit
                    </Button>
                </Typography>
            </Grid>
        </Grid>
        <Box sx={{m: 4}}/>
    </>
  )
}

export default EditForm