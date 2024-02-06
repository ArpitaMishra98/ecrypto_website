import React from 'react'

import { Box } from '@mui/material'
const Commonbox = () => {
  return (
    <>
      <Box className="commonbox">
        <Box className="card">

          <Box className="cardtitle">
            Hot Coins
          </Box>
          <Box className="cardamt">
            $302.00
          </Box>
        </Box>
        <Box className="card">
 
          <Box className="cardtitle">
            New Listing
          </Box>
          <Box className="cardamt">
            $0.5008
          </Box>
        </Box>
        <Box className="card">

          <Box className="cardtitle">
         Top Gainer Coin
          </Box>
          <Box className="cardamt">
          $0.5008
          </Box>
        </Box>
        <Box className="card">
 
          <Box className="cardtitle">
          Top Volumn Coin
          </Box>
          <Box className="cardamt">
          $0.5008
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Commonbox
