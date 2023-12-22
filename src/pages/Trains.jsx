import React, { useState } from "react";
import SideNav from "../components/SideNav";
import NavigationBar from "../components/NavigationBar";
import { Box, Button, Divider, Modal, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AddCircle } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTrainForm from "./AddTrainForm";
import EditTrainForm from "./EditTrainForm";
import { getTrains } from "../feature/train/trainSlice";

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

const Trains = () => {

    // for modals
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [formId, setFormId] = useState("");
    const handleOpen = () => setOpen(true);
    const handleEditOpen = () => setEditOpen(true);
    const handleClose = () => setOpen(false);
    const handleEditClose = () => setEditOpen(false);  
    // modals end here

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getTrains());
    }, []);
    const trainState = useSelector((state) => state.train.trains);
    console.log(trainState);
  
    const rows = [];
    for (let i = 0; i < trainState.length; i++) {
        rows.push({
          key: i + 1,
          number: trainState[i].number,
          name: trainState[i].name,
          from: trainState[i].from,
          to: trainState[i].to,
          seat: trainState[i].seat,
      })
    }

    const editTrain = (number, name, from, to, seat) => {
      const data = {
        number, name, from, to, seat
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

          {/* Modals */}

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <AddTrainForm closeEvent={handleClose} />
            </Box>
          </Modal>

          <Modal
            open={editOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <EditTrainForm closeEvent={handleEditClose} fid={formId} />
            </Box>
          </Modal>

          {/* Modals Ends Here */}

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Users List
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button
              variant="contained"
              endIcon={<AddCircle />}
              onClick={handleOpen}
            >
              Add
            </Button>
          </Stack>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Number</TableCell>
                  <TableCell align="left">Name&nbsp;</TableCell>
                  <TableCell align="left">From&nbsp;</TableCell>
                  <TableCell align="left">To&nbsp;</TableCell>
                  <TableCell align="left">Seats&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.number}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.number}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.from}</TableCell>
                    <TableCell align="left">{row.to}</TableCell>
                    <TableCell align="left">{row.seat}</TableCell>
                    <TableCell align="left">
                      <Stack spacing={2} direction="row">
                        <EditIcon
                          style={{
                            fontSize: "20px",
                            color: "blue",
                            cursor: "pointer",
                          }}
                          className="curson-pointer"
                          onClick={()=>editTrain(row.number, row.name, row.from, row.to, row.seat)}
                        />
                        <DeleteIcon
                          style={{
                            fontSize: "20px",
                            color: "darkred",
                            cursor: "pointer",
                          }}
                          className="curson-pointer"
                          // onClick={()=>deleteUser(row.id)}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Trains;
