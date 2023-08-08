import React from 'react'

import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width="300px">
         <Card>
            <CardMedia component="img" height="140px" image="https://source.unsplash.com/random" alt='unsplash image' /> 
            <CardContent>
             <Typography gutterBottom variant='h5' component='div'>
                Lorem
                </Typography> 
             <Typography variant='body2' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis magnam quis consequatur cupiditate et voluptas? Delectus est accusamus enim tempora, animi quasi quos ullam!
             </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
         </Card>
    </Box>
  )
}
