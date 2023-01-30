import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import background from "./images/background.png"

export default function Banner() {
    const style = {
        backgroundImage: `url(${background})`,
        minHeight: 450,
        maxHeight: 560,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
    }
  return (
    <Box sx={style}>
      <Typography variant='h1' fontWeight={900}>
        GYbP
      </Typography>
      <Typography variant="p">
        A place to start your journey
      </Typography>
      <Button variant="contained" color='warning'>Get started</Button>
    </Box>
  )
}
