import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Description() {
    const container={
        mt: 2,
    }

    const card={
        p: 4,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <Grid container spacing={2} sx={container}>
            <Grid item xs={12}>
                <Card sx={card}>
                    <CardContent sx={{maxWidth: 600}}>
                        <Typography variant='h4'>
                            What is GYbP?
                        </Typography>
                        <Typography variant="p">
                        GYbP is a tour company: Explore on a slow pace, without stress, we will have fun, with a small group, there will be time to take pictures, it will be a fun experience, this tour is designed for everyone (families and retired people included), they will have the best recommendations to know what do after the tour and where to go to eat …, etc.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to="/About" variant="contained">About us</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}
