import React from 'react'
import { Box, Button, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { fetchallmarketdetails } from '@/API/Apifunctions/Marketapiimage'
import { GetStaticProps } from 'next'

const index = ({ allmarkets }: { allmarkets: any }) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
          <center> <h1>All Market Details</h1> </center> 
            <Box className="market-page">
  
                <Box className="markettable">
                    {
                        !allmarkets ? (
                            <>
                            </>
                        ) : (
                            <>
                                <TableContainer className="custom-table-container">
                                    <Table className="custom-table">
                                        <TableHead className='tableheader'>
                                            <TableRow>
                                                <TableCell className="custom-cell header">ExchangeID</TableCell>
                                                <TableCell align="center" className="custom-cell header">Rank</TableCell>
                                                <TableCell align="center" className="custom-cell header">Base-Symbol</TableCell>
                                                <TableCell align="center" className="custom-cell header">Base-ID</TableCell>
                                                <TableCell align="center" className="custom-cell header">Symbol</TableCell>
                                                <TableCell align="center" className="custom-cell header">QuoteID</TableCell>
                                                <TableCell align="center" className="custom-cell header">PriceQuote</TableCell>
                                                <TableCell align="center" className="custom-cell header">PriceUsd</TableCell>
                                                <TableCell align="center" className="custom-cell header">EX. Volume(%)</TableCell>
                                                <TableCell align="center" className="custom-cell header">Trades Count</TableCell>
                                                <TableCell align="center" className="custom-cell header">Updated</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                allmarkets?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item: any, mkey: any) => {
                                                    return (
                                                        <>
                                                            <TableRow key={mkey} className="custom-row">
                                                                <TableCell align="center" className="custom-cell">{item.exchangeId}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.rank}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.baseSymbol}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.baseId}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.quoteSymbol}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.quoteId}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.priceQuote?.slice(0, 7)}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.priceUsd?.slice(0, 7)}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.percentExchangeVolume?.slice(0, 10) || "Not Available"}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.tradesCount24Hr}</TableCell>
                                                                <TableCell align="center" className="custom-cell">{item?.updated}</TableCell>
                                                            </TableRow>
                                                        </>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                <TablePagination
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={allmarkets?.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </>
                        )
                    }


                </Box>
            </Box>
        </>
    )
}

export default index

export const getStaticProps: GetStaticProps = async () => {
    const allmarkets = await fetchallmarketdetails();
    return {
        props: {
            allmarkets,
        },
        revalidate: 60,
    };
}