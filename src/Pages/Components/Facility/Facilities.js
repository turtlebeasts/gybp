import { Card, CardContent, Grid, Typography } from '@mui/material'
import ShieldIcon from '@mui/icons-material/Shield';
import SchoolIcon from '@mui/icons-material/School';
import SupportIcon from '@mui/icons-material/Support';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import React from 'react'

const cardStyle = {
    textAlign: 'center'
}

const container = {
    p: 4
}

function Cards(props) {
    const { title, Icon } = props.data
    return (
        <Card sx={cardStyle}>
            <CardContent>
                <Typography>
                    {Icon}
                </Typography>
                <Typography variant='body1'>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

const facilities = [
    {
        title: 'Security',
        Icon: <ShieldIcon sx={{fontSize: 100}}/>
    },
    {
        title: 'Knowledge',
        Icon: <SchoolIcon sx={{fontSize: 100}}/>
    },
    {
        title: 'Support',
        Icon: <SupportIcon sx={{fontSize: 100}}/>
    },
    {
        title: 'Vehicle',
        Icon: <AirportShuttleIcon sx={{fontSize: 100}}/>
    },
]

export default function Facilities() {
    return (
        <Grid container spacing={2} sx={container}>
            {
                facilities.length ?
                    facilities.map((data, index) => {
                        return (
                            <Grid item xs={6} md={3} key={index}>
                                <Cards data={data} />
                            </Grid>
                        )
                    })
                    : ""
            }
        </Grid>
    )
}
