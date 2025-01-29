"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import { fetchTransactionData } from '@/backend-wrappers'
import { data } from '@/backend-wrappers'

fetchTransactionData();

export default function TransactionsTable() {

  const [page, setPage] = React.useState(0);

  const rowNum = 10;
  const paginatedData = data.slice(rowNum * page, rowNum * page + rowNum);

  const handleChangePage = (event, page: number) => {
    setPage(page);
  }

  return (
    <div className='flex flex-col h-full w-full m-4'>
      <div className=''>
        <TableContainer component={Paper}>
          <Table
            sx={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount ($)</TableCell>
                <TableCell>Transaction Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row) => (
                <TableRow
                  key={row.product}
                  sx={{ height: 32}}
                >
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.type}</TableCell>
                </TableRow>
              ))} 
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowNum}
          sx={{ zIndex: 5 }}
        />
      </div>
    </div>
  )
}