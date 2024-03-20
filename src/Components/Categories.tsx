import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Categories = () => {

    

  return (
    <div className='Categories'>
        <h2>Categories</h2>
        <hr />
        <h3>All</h3>
        <h3>Clothes</h3>
        <h3>Furniture</h3>
        <h3>Shoes</h3>
        <h3>Miscellaneous</h3>
        <hr />
        <h4>Search Product With Name <span>*</span></h4>
        <input type="text" placeholder='Type a product' />
        <h4>Price Range</h4>
        {/* <Box sx={{ width: 300 }}>
        <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
        />
        </Box> */}
    </div>
  );
};

export default Categories;
