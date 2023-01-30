import { Alert, Avatar, Card, CardContent, Grid, Link, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'

const style = {
    p: 4,
    pb: 0,
    display: 'flex',
    justifyContent: 'center',
}

export default function Footer() {
    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item xs>
                    <CardContent sx={style}>
                        <Avatar src='https://media.licdn.com/dms/image/C4D03AQHvVjqa-7_dIg/profile-displayphoto-shrink_400_400/0/1656783538032?e=1680739200&v=beta&t=VadujPfFRTh9U3QKWnqzSDjj5FfEC2pj8GTIGnU2wPY' sx={{ width: 54, height: 54 }} />
                    </CardContent>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant='body2'>
                            Founder: Pronit Baglari & Team<br />
                            <Link href="https://www.linkedin.com/in/pronit-baglari-69022b244/" underline='none' color={"inherit"}><LinkedInIcon sx={{ fontSize: 30 }} /></Link>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs>
                    <CardContent sx={style}>
                        <Avatar src='https://media.licdn.com/dms/image/C4D03AQGcU5uE2wNcFQ/profile-displayphoto-shrink_400_400/0/1659692275465?e=1680739200&v=beta&t=jh6dHm5-oukBPNNYnbpgzA89CUTfhpUyLe8W9fBPKos' sx={{ width: 54, height: 54 }} />
                    </CardContent>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant='body2'>
                            Site developer: Mriganka<br />
                            <Link href="https://github.com/turtlebeasts/" underline='none' color={"inherit"}><GitHubIcon sx={{ fontSize: 30 }} /></Link>
                            <Link href="https://www.linkedin.com/in/mriganka-das-05385822a/" underline='none' color={"inherit"}><LinkedInIcon sx={{ fontSize: 30 }} /></Link>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md>
                    <CardContent>
                        <Typography variant='body1'>
                            GYbP © is a self funding company, the company is located at <Link href="https://www.google.com/search?q=Jokai+Dibrugarh" target={"_blank"}>Jokai, Dibrugarh, Assam</Link>. GYbP happily recruits workers from anywhere with any skills, feel free to help us to make GYbP more successful.
                        </Typography>
                        <Alert severity="warning">GYbP does not contact anyone for recruitments at any stages or time. Beware of fraud calls.</Alert>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}
