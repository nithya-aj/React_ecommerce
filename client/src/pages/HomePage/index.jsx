import { Box } from '@mui/material'
import React from 'react'
import Appbar from '../../components/Appbar'
import Banner from '../../components/Banner'
import BestDeals from '../../components/BestDeals'
import Categories from '../../components/Categories'
import Topbar from '../../components/Topbar'

const HomePage = () => {
    return (
        <div style={{marginBottom:'3rem'}}>
            <Topbar />
            <Box sx={{mx:'5rem'}}>
                <Appbar />
                <Categories />
            </Box>
            <Banner />
            <BestDeals />
        </div>
    )
}

export default HomePage