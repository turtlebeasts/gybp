import { Avatar, AvatarGroup, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const container = {
    mt: 4,
    p: 4,
    textAlign: 'center'
}
const avatar={
    display: 'flex',
    justifyContent: 'center'
}
export default function About() {
  return (
    <Grid container spacing={2} sx={container}>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}>
        <Card>
            <CardContent>
                <Typography variant="h4">
                    About us
                </Typography>
                <Typography variant="body1">
                    We are a crowd of freedom loving people, enjoying life at its full potential. We explore, have fun and enjoy what we do. The decision of making this company is like making a dream come true. Thanks to the members of this company, contributing their best to make GYbP a successful project. We take everyone with us to enjoy the nature at its best.
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{mt: 2}}>
            <CardContent>
                <Typography variant="h4">
                    Members
                </Typography>
                <AvatarGroup sx={avatar}>
                    <Avatar src='https://media.licdn.com/dms/image/C4D03AQHvVjqa-7_dIg/profile-displayphoto-shrink_400_400/0/1656783538032?e=1680739200&v=beta&t=VadujPfFRTh9U3QKWnqzSDjj5FfEC2pj8GTIGnU2wPY' alt='Pronit' sx={{width: 100, height: 100}}/>
                    <Avatar src='https://media.licdn.com/dms/image/C4D03AQGcU5uE2wNcFQ/profile-displayphoto-shrink_400_400/0/1659692275465?e=1680739200&v=beta&t=jh6dHm5-oukBPNNYnbpgzA89CUTfhpUyLe8W9fBPKos' alt='Mriganka' sx={{width: 100, height: 100}}/>
                </AvatarGroup>
            </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </Grid>
  )
}
