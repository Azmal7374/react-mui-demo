import React from 'react'

import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState} from 'react'
export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
console.log(anchorEl)

const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
     setAnchorEl(event.currentTarget)
    }

    const handleClose =()=>{
      setAnchorEl(null)  
    }
  return (
     <AppBar position='static' >

        <Toolbar >
           <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
            <CatchingPokemonIcon  ></CatchingPokemonIcon>
           </IconButton >
           <Typography variant='h6' component='div' sx={{flexGrow: 1 }}>
           PokeMONAPP

           </Typography>
           <Stack direction='row' spacing={2}>
            <Button color='inherit'>
                Features
            </Button>
            <Button color='inherit'>
                 Pricing
            </Button>
            <Button color='inherit'>
                About
            </Button>
            <Button id='resources-button' color='inherit' onClick={handleClick} aria-controls={open ? 'resources-menu' : undefined } aria-haspopup='true' aria-expanded={open? 'true' : undefined} endIcon={<KeyboardArrowDownIcon />}>
               Resources
            </Button>
            <Button color='inherit'>
                 Login
            </Button>

           </Stack>
           <Menu id='resources-menu' anchorEl={anchorEl}  open={open} MenuListProps={{
            'aria-labelledby': 'resources-button',
           }}
           onClose={handleClose} 
           anchorOrigin = {{
            vertical: 'bottom',
            horizontal: 'right',
           }}
           >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>

           </Menu>
        </Toolbar>

     </AppBar>
  )
}