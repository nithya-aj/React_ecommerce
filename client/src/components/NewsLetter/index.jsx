import { Button, Input } from '@mui/joy'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import newsLetter from '../../images/newsLetter.png'

const NewsLetter = () => {
    return (
        <Box sx={{ backgroundColor: '#3187ED', padding: '5rem' , paddingLeft:'9rem'}}>
            < Grid container spacing={6} gap={'5rem'}>
                <Grid item xs={1}>
                    <img src={newsLetter} alt="" />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h5' style={{ fontWeight: '600' }}>Sign Up for Newsletter</Typography>
                    <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia necessitatibus quos iste repellendus hic?</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Input
                        endDecorator={<Button sx={{ backgroundColor: '#4D4C4C', color: 'white' }}>SUBSCRIBE</Button>}
                        sx={{
                            "--Input-minHeight": "52px",
                            "--Input-gap": "90px",
                            "--Input-decoratorChildHeight": "39px",
                            mx:'3rem'
                        }}
                        placeholder={'Enter your email here'}
                    />
                </Grid>
            </Grid >
        </Box>
    )
}

export default NewsLetter

