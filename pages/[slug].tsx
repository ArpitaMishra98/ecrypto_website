import React from 'react'
import { Box, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { fetchSingleAssetDetails, fetchassetshistory, fetchassetsmarket } from '@/API/Apifunctions/AssetsApimanage';
import { useQuery } from 'react-query';

const Singleassets = () => {
    const router = useRouter();
    const { slug } = router?.query;

    const { data: singleasset, isLoading: singleassetloading, isError: singleasseterror } = useQuery({
        queryKey: ["singleassets", { slug }],
        enabled: !!slug,
        queryFn: () => fetchSingleAssetDetails(slug),
    });

    const { data: assethistory, isLoading: assethistoryloading, isError: assetshistoryerror } = useQuery({
        queryKey: ["assetshistory", { slug }],
        queryFn: () => fetchassetshistory(slug),
        enabled: !!slug,
    })

    const { data: assetmarkets, isLoading: assetmarketloading, isError: assetmarketerror } = useQuery({
        queryKey: ["assetmarket", { slug }],
        queryFn: () => fetchassetsmarket(slug),
        enabled: !!slug,
    })


    // pagination Code for Two Table
    const [page, setPage] = React.useState(0);
    const [page1, setPage1] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rowsPerPage1, setRowsPerPage1] = React.useState(7);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangePage1 = (event: unknown, newPage: number) => {
        setPage1(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleChangeRowsPerPage1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage1(+event.target.value);
        setPage1(0);
    };
    return (
        <>
           <center><h2>Assets Details</h2></center>
            <CardContent className='coinDetails'>
                <Typography sx={{ fontSize: 28 }} color="text.primary" gutterBottom>
                    Name: {singleasset?.name}      </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                    Symbol: {singleasset?.symbol}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                    Supply: {singleasset?.supply}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                    Symbol: {singleasset?.symbol}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                    MaxSymbol: {singleasset?.maxSupply}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                    Market: {singleasset?.marketCapUsd}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                    Volume: {singleasset?.volumeUsd24Hr}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                    Price: {singleasset?.priceUsd}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                    Change Percent: {singleasset?.changePercent24Hr}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                    Wap: {singleasset?.vwap24Hr}
                </Typography>
            </CardContent>
            <Box className="main-contents">
                <Box className="assetstablecontent1">
                    <center><h2> All History Details</h2></center>
                    <TableContainer className="custom-table-container">
                        <Table className="custom-table">
                            <TableHead className='tableheader'>
                                <TableRow>
                                    <TableCell className="custom-cell header">Price USD</TableCell>
                                    <TableCell align="center" className="custom-cell header">Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    assethistory?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item, hkey) => {
                                        return (
                                            <>
                                                <TableRow key={hkey} className="custom-row">
                                                    <TableCell align="center" className="custom-cell">{item.priceUsd}</TableCell>
                                                    <TableCell align="center" className="custom-cell">{item?.time}</TableCell>
                                                </TableRow>
                                            </>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10]}
                        component="div"
                        count={assethistory?.length as number}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        className='tablepagination'
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
                <Box className="assetstablecontent2">
                    <center><h2> All Market Details</h2></center>
                    <TableContainer className="custom-table-container">
                        <Table className="custom-table">
                            <TableHead className='tableheader'>
                                <TableRow>
                                    <TableCell className="custom-cell header">Exchange-Id</TableCell>
                                    <TableCell align="center" className="custom-cell header">BaseId</TableCell>
                                    <TableCell align="center" className="custom-cell header">QuoteID</TableCell>
                                    <TableCell align="center" className="custom-cell header">Base Symbol</TableCell>
                                    <TableCell align="center" className="custom-cell header">Quote Symbol</TableCell>
                                    <TableCell align="center" className="custom-cell header">Volume USD</TableCell>
                                    <TableCell align="center" className="custom-cell header">Price USD</TableCell>
                                    <TableCell align="center" className="custom-cell header">Volume(%)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    assetmarkets?.slice(page1 * rowsPerPage1, page1 * rowsPerPage1 + rowsPerPage1)?.map((item, hkey) => {
                                        return (
                                            <>
                                                <TableRow key={hkey} className="custom-row">
                                                    <TableCell align="center" className="custom-cell">{item?.exchangeId}</TableCell>
                                                    <TableCell align="center" className="custom-cell">{item?.baseId}</TableCell>
                                                    <TableCell align="center" className="custom-cell">{item?.quoteId}</TableCell>
                                                    <TableCell align="center" className="custom-cell">{item?.baseSymbol}</TableCell>
                                                    <TableCell align="center" className="custom-cell">{item?.quoteSymbol}</TableCell>
                                                    <TableCell align="center" className="custom-cell">{item?.volumeUsd24Hr?.slice(0, 7)}</TableCell>
                                                    <TableCell align="center" className="custom-cell">{item?.priceUsd?.slice(0, 10)}</TableCell>
                                                    <TableCell align="center" className="custom-cell">{item?.volumePercent?.slice(0, 7)}</TableCell>
                                                </TableRow>
                                            </>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10]}
                        component="div"
                        count={assetmarkets?.length as number}
                        rowsPerPage={rowsPerPage1}
                        page={page1}
                        className='tablepagination'
                        onPageChange={handleChangePage1}
                        onRowsPerPageChange={handleChangeRowsPerPage1}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Singleassets