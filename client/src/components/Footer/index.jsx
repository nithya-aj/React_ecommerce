import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { BsYoutube, BsLinkedin, BsTwitter, BsInstagram, BsApple } from "react-icons/bs";
import { FaFacebookF, FaGooglePlay } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Footer = () => {

    const links = [<BsYoutube />, <BsLinkedin />, <BsTwitter />, <FaFacebookF />, <BsInstagram />]
    const quick = ['Products', 'Classifieds', 'Contact us', 'Login', 'Sign Up']
    const customer = ['My Account', 'Orders', 'Tracking List', 'Terms', 'Privary Policy', 'Return Policy', 'My cart']
    const Vendor = ['Partner with us', 'Training', 'Procedures', 'Terms', 'Privacy Policy']

    return (
        <Grid container spacing={3} sx={{ padding: '4rem' }}>
            <Grid item xs={3}>
                <Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: '600', paddingBottom: '1rem' }}
                    >
                        logoipsum
                    </Typography>
                    <Typography variant='caption'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    </Typography>
                    <Box sx={{ display: 'flex', color: 'gray', gap: '1rem', my: '2rem' }}>
                        {links.map((link, id) => (link))}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={1.5}>
                <Typography variant='h6' sx={{ fontWeight: '600', fontSize: '16px' }}>
                    QUICK LINKS
                </Typography>
                <Typography>
                    {quick.map((item, id) => (
                        <p>{item}</p>
                    ))}
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography variant='h6' sx={{ fontWeight: '600', fontSize: '16px' }}>
                    CUSTOMER AREA
                </Typography>
                <Typography>
                    {customer.map((item, id) => (
                        <p>{item}</p>
                    ))}
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography variant='h6' sx={{ fontWeight: '600', fontSize: '16px' }}>
                    VENDOR AREA
                </Typography>
                <Typography>
                    {Vendor.map((item, id) => (
                        <p>{item}</p>
                    ))}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Box >
                    <Typography variant='h6' sx={{ fontWeight: '600', fontSize: '16px' }}>
                        CONTACT
                    </Typography>
                    <Typography variant='caption'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', my: '1rem' }}>
                        <TfiHeadphoneAlt style={{ fontSize: '30px' }} />
                        <Box>
                            <Typography variant='h6'>Have any question?</Typography>
                            <Typography variant='caption' sx={{ color: '#00C7D9', fontSize:'18px' }}>+ 123 456 789</Typography>
                        </Box>
                        <Button variant="outlined">CHAT</Button>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my:'2rem' }}>
                        <Button variant="contained" sx={{ mx: '1rem', backgroundColor: 'black', color: 'white', textTransform: 'none' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                                <Box>
                                    <BsApple style={{ fontSize: '30px' }} />
                                </Box>
                                <Box>
                                    <Typography variant='caption' style={{ fontSize: '10px' }}>Download on the</Typography>
                                    <Typography variant='h6' style={{ fontSize: '12px ', fontWeight: '600 ' }}>App Store</Typography>
                                </Box>
                            </Box>
                        </Button>
                        <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', textTransform: 'none'}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                                <Box>
                                    <FaGooglePlay style={{ fontSize: '28px' }} />
                                </Box>
                                <Box>
                                    <Typography variant='caption' style={{ fontSize: '10px' }}>Get it on</Typography>
                                    <Typography variant='h6' style={{ fontSize: '12px ', fontWeight: '600 ' }}>Google Play</Typography>
                                </Box>
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Footer