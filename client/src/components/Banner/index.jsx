import React from 'react'
import banner from '../../images/banner.jpg'
import { Grid, Typography } from '@mui/material';

const Banner = () => {

    return (
        <Grid container direction="column" alignItems="center" sx={{ my: '2rem' }}>
            <Grid item>
                <img style={{ display: 'block', overflow: 'hidden', width: '100%', height: '23rem', borderRadius: '29px' }} src={banner} alt="description" />
            </Grid>
            <Grid item sx={{ width: '40rem', height: '0px' }}>
                <Typography variant="h2">
                    <Typography sx={{ position: 'relative', top: '-16rem', left: '18rem', fontSize: '30px' }} variant='h5'>From students to senior citizens <br /> this web portal of <br />
                        <span style={{ fontWeight: '600' }}>"Products and Classifieds” <br /></span>
                        provides it all
                    </Typography>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Banner

