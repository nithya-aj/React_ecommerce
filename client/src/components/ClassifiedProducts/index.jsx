import { Button } from '@mui/joy';
import { Box, Typography } from '@mui/material'
import React from 'react'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdLocationOn } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import drone from '../../images/drone.jpg'

const ClassifiedProducts = () => {

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <Box sx={{ backgroundColor: '#E5E5E5', marginTop: '1rem', padding: '6rem', overflow: 'auto' }}>
            <Box container gap={2} sx={{ px: '2rem', display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '10rem', textAlign: 'center', marginRight: '2rem', gap: '1rem' }}>
                    <Typography variant='h6'>
                        Classified Products on the week
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                        <Box sx={{ height: '2rem', width: '2rem', borderRadius: "50%", backgroundColor: 'white', boxShadow: '6' }}><MdOutlineKeyboardArrowLeft style={{ fontSize: '22px', position: 'relative', right: '1%', top: '16%' }} /></Box>
                        <Box sx={{ height: '2rem', width: '2rem', borderRadius: "50%", backgroundColor: 'white', boxShadow: '6' }}><MdOutlineKeyboardArrowRight style={{ fontSize: '22px', position: 'relative', left: '1%', top: '16%' }} /></Box>
                    </Box>
                    <Button size="lg" sx={{ backgroundColor: "#00C6D7", marginLeft: '2rem', px: '2rem', margin: '1rem' }}>Explore  <MdKeyboardArrowRight style={{ fontSize: '20px' }} /></Button>
                </Box>
                {items.map((item, index) => (
                    <Box key={index} item >
                        <Card variant="outlined" sx={{ width: 220 }}>
                            <CardOverflow>
                                <AspectRatio ratio="1.5">
                                    <img
                                        src={drone}
                                        srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                    />
                                </AspectRatio>
                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 1, p: '0.5rem' }}>
                                Holy Stone HS470 Foldable GPS RC Drone
                            </Typography>
                            <CardOverflow
                                variant="soft"
                                sx={{
                                    display: 'flex',
                                    gap: 3,
                                    py: 1.5,
                                    px: 'var(--Card-padding)',
                                    bgcolor: 'background.level1',
                                }}
                            >
                                <Typography level="body3" sx={{ fontWeight: 'md', color: '#00C6D7' }} style={{fontWeight:'600'}}>
                                    $300.98
                                </Typography>
                                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                    <span><MdLocationOn /></span>Cape Hadstone
                                </Typography>
                            </CardOverflow>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default ClassifiedProducts

