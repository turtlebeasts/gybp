import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system'
import React from 'react'

const container = {
    mt: 4,
    p: 4,
    textAlign: 'center'
}
function Form() {
    return (
        <Box>
            <TextField id="outlined-basic" label="Your email" variant="outlined" autoComplete='' sx={{ mt: 2, width: '100%' }} /><br />
            <TextField id="outlined-basic" label="Your message" variant="outlined" multiline sx={{ mt: 2, mb: 2, width: '100%' }} rows={4} />
            <Button variant="contained" endIcon={<SendIcon />}>Send Email</Button>
        </Box>
    )
}
export default function Contact() {
    return (
        <Grid container spacing={2} sx={container}>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4">
                            Contact us
                        </Typography>
                        <Typography variant="body1">
                            You can contact us through the following form or you can manually ask a query on call at +91 987654321
                        </Typography>
                        <Form />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
        </Grid>
    )
}
