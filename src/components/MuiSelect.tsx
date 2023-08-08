import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

import { useState } from 'react'
export const MuiSelect = () => {

    const [countries, setCountries] = useState<string[]>([])
    console.log(countries)

    const hadleChange =(event: React.ChangeEvent<HTMLInputElement>) =>{
   
        const value = event.target.value
        setCountries(typeof value ==='string' ? value.split(','): value)

    }

  return (
     <Box width='250px'>
        <TextField label='Select country' select value={countries} onChange={hadleChange} fullWidth SelectProps={{
            multiple: true
        }}
        
        size='small' color='secondary' helperText='Please Select Your country' error>
          <MenuItem value='Bd'>Bangladesh</MenuItem>
          <MenuItem value='Us'>USA</MenuItem>
          <MenuItem value='AU'>Austraia</MenuItem>
        </TextField>
     </Box>
  )
}
