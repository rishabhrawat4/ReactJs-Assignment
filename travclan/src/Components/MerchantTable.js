import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableRow, TableHead, TableFooter, TablePagination } from '@material-ui/core'

const MerchantTable = ({ data }) => {
  console.log(data)

  const pages = [5]
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  }

  const dataAfterPagging = () => {
    return data.slice(page*rowsPerPage, (page+1)*rowsPerPage);
  }
  return (
    <Table>
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Phone</TableCell>
            <TableCell >Has Premium</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          dataAfterPagging().map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.firstname} {item.lastname}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.hasPremium ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
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