import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const cards = {
    minHeight: 150
}

function PackageCard(props) {
    const {title, description} = props.data
    return (
        <Card>
            <CardActionArea sx={cards}>
                <CardContent>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default function Packages() {
    const packages = [
        {
            title: "Nagaland",
            description: "A tour to Nagaland, a place in India. The beauty of which all the Indians are so proud of"
        },
        {
            title: "Mizoram",
            description: "A tour to Misoram, a place in India. The beauty of which all the Indians are so proud of"
        },
        {
            title: "Shillong",
            description: "A tour to Shillong, a place in India. The beauty of which all the Indians are so proud of"
        },
        {
            title: "Arunanchal",
            description: "A tour to Arunanchal, a place in India. The beauty of which all the Indians are so proud of"
        },
    ]
    const container = {
        p: 4
    }
    return (
        <Grid container spacing={2} sx={container}>
            {
                packages.length ?
                    packages.map((tours, index) => {
                        return (
                            <Grid item xs={6} md={3} key={index}>
                                <PackageCard data={tours} />
                            </Grid>
                        )
                    })
                :"No packages..."
        }
        </Grid>
    )
}
