import React, { useEffect, useState } from 'react';
import { Table, 
          TableBody, 
          TableCell, 
          TableRow, 
          TableHead, 
        } from '@material-ui/core';



const DetailsTable = ({bids}) => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Car Title</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            bids.map((bid) => (
              <TableRow key={bid.id}>
                <TableCell>{bid.carTitle}</TableCell>
                <TableCell>{bid.amount}</TableCell>
              </TableRow>
            ))
          }
      </TableBody>
      </Table>
    )
}

export default DetailsTable