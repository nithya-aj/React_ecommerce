import { Box, Divider, Grid, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { BsFillCartPlusFill } from "react-icons/bs";
import { IconButton } from '@mui/joy';
import axios from 'axios';

const BestDeals = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        async function fetchProducts() {
            const response = await axios.get('http://localhost:5000/product/')
            setProducts(response.data)
        }
        fetchProducts()
    }, [])

    return (
        <Box sx={{ mx: '5rem' }}>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '2rem' }}>
                <Typography variant='h6' sx={{ fontWeight: '800' }}>Best Deals</Typography>
                <p style={{ color: '#3187ED', fontWeight: '500', cursor: 'pointer' }}>View all</p>
            </Box>

            <Grid container spacing={2} sx={{ px: '2rem' }}>
                {products.map((product) => (
                    <Grid key={product._id} item xs={2.4} >
                        <Card sx={{ display: 'flex', boxShadow: '0' }}>

                            <Box sx={{ padding: '1rem'}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image="https://picsum.photos/seed/picsum/200/300"
                                    alt="Live from space album cover"
                                />
                                <Box style={{position:'relative', bottom:'3rem', left:'3.4rem'}}>
                                    <IconButton color="primary" aria-label="add to shopping cart">
                                        <BsFillCartPlusFill />
                                    </IconButton>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ padding: '0', paddingTop: '1rem' }}>
                                    <Typography variant="h6" sx={{ fontSize: '15px', fontWeight: '600' }}>
                                        {product.desc}
                                    </Typography>
                                    <Box sx={{ display: 'flex', py: '1rem', alignItems: 'center', justifyContent: 'center', gap:'0.5rem' }}>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Rs. {product.price}
                                        </Typography>
                                        <Divider sx={{ borderRightWidth: 2, bgcolor: "black" }} orientation="vertical" variant="middle" flexItem />
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            <span>Qty</span> {product.quantity}
                                        </Typography>
                                    </Box>
                                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', gap: '3px' }}>
                                        <Rating name="size-small" defaultValue={4} size="small" />(12)
                                    </span>
                                </CardContent>
                            </Box>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BestDeals

