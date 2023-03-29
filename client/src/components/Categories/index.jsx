import { Box } from '@mui/material'
import React from 'react'
import DropdownButton from '../DropdownButton.js/index.jsx'

const Catogories = () => {

    const categoryItems = ['Books', 'Electronics', 'Real Estate', 'Cars-Bikes', 'Dorm-Furniture', 'Men', 'Women', 'Music', 'Hobbies Games', 'Toys', 'Kids']

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DropdownButton placeholder="All categories" />
            {categoryItems.map((item, index)=>(
                <p style={{margin:'1rem'}}>{item}</p>
            ))}
        </Box>
    )
}

export default Catogories