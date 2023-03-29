import { Box } from '@mui/material'
import React from 'react'
import Appbar from '../../components/Appbar'
import Banner from '../../components/Banner'
import BestDeals from '../../components/BestDeals'
import Categories from '../../components/Categories'
import ClassifiedProducts from '../../components/ClassifiedProducts'
import Footer from '../../components/Footer'
import NewsLetter from '../../components/NewsLetter'
import Topbar from '../../components/Topbar'

const HomePage = () => {
    return (
        <div style={{ marginBottom: '3rem' }}>
            <Topbar />
            <Box sx={{ mx: '5rem' }}>
                <Appbar />
                <Categories />
            </Box>
            <Banner />
            <BestDeals />
            <ClassifiedProducts />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default HomePage