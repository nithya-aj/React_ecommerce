import { Box, Divider } from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocalPostOffice, MdLocationOn } from "react-icons/md";
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Topbar = () => {
    return (
        <Box sx={{ backgroundColor: '#3187ED', color: 'white' }}>
            <Stack direction="row" spacing={70} pr='2rem' pl='8rem' height='2.5rem'>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <BsTelephoneFill />
                    <p>+221 33 66 22</p>

                    <MdLocalPostOffice />
                    <p>support@elextra.io</p>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <MdLocationOn />
                    <p>Locations</p>

                    <Divider sx={{ borderRightWidth: 1, bgcolor: "white" }} orientation="vertical" variant="middle" flexItem />

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth >
                            <NativeSelect
                                disableUnderline
                                defaultValue={10}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                                style={{color:'white'}}
                            >
                                <option value={10}>$ Dollar (US)</option>
                                <option value={20}>Indian Ruppee</option>
                                <option value={30}>Yuan</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 100 }}>
                        <FormControl fullWidth >
                            <NativeSelect
                                disableUnderline
                                defaultValue={10}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                                style={{color:'white'}}
                            >
                                <option value={10}>EN (US)</option>
                                <option value={20}>Mal</option>
                                <option value={30}>Esp</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>

                </Box>
            </Stack>
        </Box>
    )
}

export default Topbar