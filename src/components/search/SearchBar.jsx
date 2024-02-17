import React, { useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, styled } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

const Wrapper = styled(Box)`
    width: 50%;
    height: 37.6px;
    display: flex;
    align-items: center;
    margin: auto;
    border-radius: 4px;
    border: 1px solid rgb(195, 195, 195); 
    background-color: #fff;
`;



const InputField = styled('input')({
    height: '90%',
    width: '76%',
    fontSize: 16,
    border: 'none',
    outline: 'none',
    fontSize: 18
})

const IconWrapper = styled(Box)`
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const SearchBar = () => {

    const {location,setLocation} = useContext(DataContext)

    const handleChange = (event) => {
      setLocation(event.target.value)
      console.log(location)
    };
  
    return(
        <Wrapper>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            onChange={(e)=>handleChange(e)}
            
            sx={{
                fontSize: 18,
                width:'15%',
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}

            >
                <MenuItem style={{fontSize: 18}} value={'Dubai'}>Dubai</MenuItem>
                <MenuItem style={{fontSize: 18}}value={'Abu Dhabi'}>Abu Dhabi</MenuItem>
                <MenuItem style={{fontSize: 18}}value={'Sharjah'}>Sharjah</MenuItem>
                <MenuItem style={{fontSize: 18}}value={'Ajman'}>Ajman</MenuItem>
                <MenuItem style={{fontSize: 18}}value={'Riyadh'}>Riyadh</MenuItem>
                <MenuItem style={{fontSize: 18}}value={'Qatar'}>Qatar</MenuItem>
                <MenuItem style={{fontSize: 18}}value={'Muscat'}>Muscat</MenuItem>
            </Select>
            
            <InputField type="text" placeholder="Start typing to find a service" />
            <IconWrapper><SearchIcon style={{fontSize: 28, color: 'rgb(195, 195, 195)'}}/></IconWrapper>
          </Wrapper>
  )
}

export default SearchBar;