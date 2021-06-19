import React, { useEffect, useState } from 'react';
import { Table, 
          TableBody, 
          TableCell, 
          TableRow, 
          TableHead, 
          TableFooter, 
          TablePagination, 
          TableSortLabel,
          Select,
          MenuItem,
        } from '@material-ui/core';

import { findHighestBid, findLowestBid } from '../Function/FindBidsPrice';
import { sortByDecreasing, sortByIncreasing } from "../Function/Sorting";


const MerchantTable = ({ data }) => {
  const pages = [5];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState("desc");
  const [open, setOpen] = useState(false);
  const [bidType, setBidType ] = useState("max")

  const handleChange = (event) => {
    setBidType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const createSortHandler = () => {
    if(orderBy === "desc"){
      data = sortByIncreasing(data, bidType);
      setOrderBy("asc");
    }
    else{
      data = sortByDecreasing(data, bidType);
      setOrderBy("desc");
    }
  }
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  }

  const dataAfterPagging = () => {
    return data.slice(page*rowsPerPage, (page+1)*rowsPerPage);
  }

  useEffect(() => {
    sortByDecreasing(data, bidType);
    console.log("done")
  }, [])


  return (
    <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Has Premium</TableCell>
            <TableCell>
              <TableSortLabel
                active={true}
                direction={orderBy}
                onClick={createSortHandler}
              >
                {bidType === "max" ? "Maximum Bid" : "Minimum Bid"}
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          dataAfterPagging().map(item => (
            <TableRow key={item.id} onClick={() => console.log(item)}>
              <TableCell>{item.firstname} {item.lastname}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.hasPremium ? "Yes" : "No"}</TableCell>
              <TableCell>{bidType === "max" ? findHighestBid(item.bids) : findLowestBid(item.bids)}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={bidType}
        onChange={handleChange}
      >
        <MenuItem value="max">Maximum Bids</MenuItem>
        <MenuItem value="min">Minimum Bids</MenuItem>
      </Select>
      <TablePagination
        rowsPerPageOptions={pages}
        component="div"
        page={page}
        count={data.length}
        rowsPerPage ={rowsPerPage}
        onChangePage={handlePageChange}
      />
    </Table>
  )
}

export default MerchantTable;