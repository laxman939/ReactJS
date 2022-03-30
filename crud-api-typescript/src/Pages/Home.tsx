/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../Redux/Actions";
import { RootStore } from "../Redux/Reducers";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Styles
const useStyles = makeStyles({
    table: {
      minWidth: 850,
    },
  });  

const Home = () => {

  const classes = useStyles();

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector( (state: RootStore) => state.usersData.users) 

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  
  return (
    <div>
    <div className="header">Contact List</div>
    <button className="addUser" onClick={() => ("/adduser")}>
      Add new user
    </button>
    <div className="container-table">
       <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Location</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: any) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.location}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">
                <button className="delete-btn"
                  onClick={() => console.log("Deleted")}>
                    <DeleteIcon />
                </button>
                <button className="edit-btn"
                  onClick={() => navigate("/edituser")}>
                    <EditIcon />
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </div>
  )
}

export default Home