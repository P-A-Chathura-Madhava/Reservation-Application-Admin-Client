import React from "react";
import SideNav from "../components/SideNav";
import NavigationBar from "../components/NavigationBar";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Autocomplete, Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import { AddCircle } from "@mui/icons-material";
import Modal from '@mui/material/Modal';
// import AddForm from "./AddForm";
// import EditForm from "./EditForm";
import Skeleton from '@mui/material/Skeleton';
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import BookTrain from "./BookTrain";
import EditBookingForm from "./EditBookingForm";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const row = [
  {firstName: "Kasun", lastName: "Sampath", address: "Bandaragama", city: "Kalutara", state: "Western Province", pincode: "12530"},
  {firstName: "Nuwan", lastName: "Gunawardane", address: "Panadura", city: "Kalutara", state: "Western Province", pincode: "10244"},
  {firstName: "Gimhan", lastName: "Rashmika", address: "Horana", city: "Kalutara", state: "Western Province", pincode: "24124"},
  {firstName: "Dasun", lastName: "Nadeesha", address: "Colombo", city: "Colombo", state: "Western Province", pincode: "42134"},
];

const Bookings = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(row);

  // // modal
  const [open, setOpen] = useState(false);
  const [formId, setFormId] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleEditOpen = () => setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete"
    }).then ((result) => {
      if (result.value) {
        setTimeout(()=>{
          Swal.fire("Deleted", "Your file has been deleted", "success");
        }, 200)
      }
    })
  }

  const filterData = (v) => {
    // if (v) {
    //   setRows([v]);
    // }else {
    //   setRows([]);
    // }
  }

  const editBooking = (firstName, lastName, address, city, state, pincode) => {
    const data = {
      firstName, lastName, address, city, state, pincode
    };
    setFormId(data);
    handleEditOpen();
  }

  return (
    <div>
      <NavigationBar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Bookings</h1>

{/* ------------------------------------------------------------- */}
<div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BookTrain closeEvent={handleClose} />
        </Box>
      </Modal>

      <Modal
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditBookingForm closeEvent={handleEditClose} fid={formId} />
        </Box>
      </Modal>
    </div>
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
      >
        Booking List
      </Typography>
      <Divider />

      <Box height={10}/>
      <Stack direction="row" spacing={2} className="my-2 mb-2">
        {/* <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={row}
        sx={{width: 300}}
        onChange={(e, v) => console.log(v)}
        getOptionLabel={(rows) => rows.name || ""}
        renderInput={(params) => {
          <TextField {...params} size="small" label="Search Users"/>
        }}
        /> */}
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={row.map((option) => option.city)}
        sx={{width: 300}}
        size="small"
        onChange={(e, v) => filterData(v)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
        <Typography 
        variant="h6"
        component="div"
        sx={{flexGrow: 1}}
        ></Typography>
        <Button variant="contained" endIcon={<AddCircle />} onClick={handleOpen}>
          Add
        </Button>
      </Stack>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  First name
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Address
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  City
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  State
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Pin Code
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={row.id} align="left">
                          {row.firstName}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.lastName}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.address}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.city}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.state}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.pincode}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon 
                            style={{
                              fontSize: "20px",
                              color: "blue",
                              cursor: "pointer"
                            }}
                            className="curson-pointer"
                            onClick={()=>editBooking(row.firstName, row.lastName, row.address, row.city, row.state, row.pincode)}
                            />
                            <DeleteIcon 
                            style={{
                              fontSize: "20px",
                              color: "darkred",
                              cursor: "pointer"
                            }}
                            // className="curson-pointer"
                            onClick={()=>deleteUser(row.id)}
                            />
                          </Stack>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
{/* ------------------------------------------------------------- */}

        </Box>
      </Box>
    </div>
  );
};

export default Bookings;
