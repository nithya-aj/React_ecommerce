import React from 'react'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const DropdownButton = (props) => {
  return (
    <Select
      placeholder={props.placeholder}
      indicator={<KeyboardArrowDown />}
      sx={{backgroundColor:'#F8F8F8', border:'0', px:'2rem', color:'black'}}
    >
      <Option value="First">First</Option>
      <Option value="Second">Second</Option>
      <Option value="Third">Fish</Option>
      <Option value="Fourth">Fourth</Option>
    </Select>
  )
}

export default DropdownButton
