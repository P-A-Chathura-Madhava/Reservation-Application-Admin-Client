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

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../feature/customers/customerSlice";

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
  {name: "Kasun", email: "kasun@gmail.com", mobile: "077-1234546"},
  {name: "Nuwan", email: "nuwan@gmail.com", mobile: "071-1234546"},
  {name: "Gimhan", email: "gimhan@gmail.com", mobile: "072-1234546"},
  {name: "Dasun", email: "dasun@gmail.com", mobile: "076-1234546"}
];

const Users = () => {
  // Using redux to manage data

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  
  const customerstate = useSelector((state) => state.customer.customers);
  // console.log(customerstate);

  const data1 = [];
  for (let i = 0; i < customerstate.length; i++) {
    if (customerstate[i].role === "user") {
      data1.push({
        key: i + 1,
        name: customerstate[i].name,
        email: customerstate[i].email,
        mobile: customerstate[i].mobile,
      });
    }
  }

  // console.log("data",data1);

  // -----------------------------

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [rows, setRows] = useState(row);
  const [rows, setRows] = useState(data1);

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

  const editUser = (name, email, mobile) => {
    const data = {
      name, email, mobile
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
          <h1>Users</h1>

{/* ------------------------------------------------------------- */}
<div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddUserForm closeEvent={handleClose} />
        </Box>
      </Modal>

      <Modal
        open={editOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditUserForm closeEvent={handleEditClose} fid={formId} />
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
        Users List
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
        options={row.map((option) => option.name)}
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
                  Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  E-Mail
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Mobile
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
                          {row.name}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.email}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.mobile}
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
                            onClick={()=>editUser(row.name, row.email, row.mobile)}
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

export default Users;
