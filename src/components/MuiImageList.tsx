 import React from 'react'
 
 import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from '@mui/material'

 export const MuiImageList = () => {
   return (
      <Stack spacing={4}>
        <ImageList sx={{ width:500, height: 450}} cols={3} rowHeight={164}>
{
    itemData.map(item =>(
        <ImageListItem key={item.img}>
        <img src={`${item.img}? w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
        </ImageListItem>
    ))
}
        </ImageList>

        <ImageList sx={{ width:500, height: 450}} cols={3} rowHeight={164}>
{
    itemData2.map(item =>(
        <ImageListItem key={item.img}>
        <img src={`${item.img}? w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
        </ImageListItem>
    ))
}
        </ImageList>

        <Box sx={{
            width:500,
            height:450,
            overflow:'scrool'
        }}>

        <ImageList   cols={3} variant='masonry' gap={8}>
{
    itemData2.map(item =>(
        <ImageListItem key={item.img}>
        <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
        <ImageListItemBar title={item.title}></ImageListItemBar>
        </ImageListItem>
    ))
}
        </ImageList>

        </Box>
      </Stack>
   )
 }
 
 const itemData =[
    {
        img:'https://img.freepik.com/free-photo/delicious-breakfast-meal-composition_23-2148878834.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast1'
    },
    {
        img:'https://img.freepik.com/premium-photo/traditional-english-breakfast_752237-15626.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast2'
    },
    {
        img:'https://img.freepik.com/free-photo/breakfast-with-coffee-fresh-croissants_2829-17547.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast3'
    },
    {
        img:'https://img.freepik.com/free-photo/delicious-breakfast-meal-composition_23-2148878834.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast4'
    },
    {
        img:'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast5'
    }, {
        img:'https://img.freepik.com/premium-photo/table-full-breakfast-items-including-eggs-cheese-bread_861622-220.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast6'
    },
    {
        img:'https://img.freepik.com/premium-photo/breakfast-buffet-healthy-continental-coffee_79295-5896.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast7'
    },
    {
        img:'https://img.freepik.com/premium-photo/croissant-coffee-coffee-shop_51764-3195.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast8'
    },
    {
        img:'https://img.freepik.com/premium-photo/white-table-with-croissants-coffee-cups-table_674594-9458.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast9'
    }
 ]
 const itemData2 =[
    {
        img:'https://img.freepik.com/free-photo/delicious-breakfast-meal-composition_23-2148878834.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast1'
    },
    {
        img:'https://img.freepik.com/premium-photo/traditional-english-breakfast_752237-15626.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast2'
    },
    {
        img:'https://img.freepik.com/free-photo/breakfast-with-coffee-fresh-croissants_2829-17547.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast3'
    },
    {
        img:'https://img.freepik.com/free-photo/delicious-breakfast-meal-composition_23-2148878834.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast4'
    },
    {
        img:'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast5'
    }, {
        img:'https://img.freepik.com/premium-photo/table-full-breakfast-items-including-eggs-cheese-bread_861622-220.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast6'
    },
    {
        img:'https://img.freepik.com/premium-photo/breakfast-buffet-healthy-continental-coffee_79295-5896.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast7'
    },
    {
        img:'https://img.freepik.com/premium-photo/croissant-coffee-coffee-shop_51764-3195.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast8'
    },
    {
        img:'https://img.freepik.com/premium-photo/white-table-with-croissants-coffee-cups-table_674594-9458.jpg?size=626&ext=jpg&uid=R91079514&ga=GA1.2.220873417.1673880723&semt=sph',
        title:'Breakfast9'
    }
 ]