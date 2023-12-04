import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import logo from './Marlbaro_9.PNG';
import logo_2 from './Marlbaro_10.PNG';
import logo_3 from './Marlbaro_12.PNG';
import logo_4 from './M_15.PNG';
import {useNavigate} from 'react-router-dom'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function MyForm_2() {

    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
      localStorage.setItem('Erste Zigarette:', JSON.stringify(event.target.value)) ;
    };
    const [isOpen, setOpen] = React.useState(
      JSON.parse(localStorage.getItem('is-open')) || false
    );
  
   
    const styles = {
        media: {
          height: 300,
          width:220
        }
    };
  
  
    const navigate = useNavigate();
 

    const handleSubmit = () => {
    
      navigate('/summary');

    };
  
    const handleClick = (event) => {
      const value = event.currentTarget.dataset.value;

      localStorage.setItem('is-open', JSON.stringify(!isOpen));
  
      setOpen(!isOpen);
      
      localStorage.setItem('Packungspreis:',JSON.stringify(value));
    };
    
     

  
return (
 <div className='Form-wrapper'>
    {!isOpen && <span><p>Was kostet eine Schachtel ?</p> </span>}
    {!isOpen && <div className='hotfix'> 
       <Card onClick={handleClick} data-value={9} sx={{
           transition: "all 0.2s ease",
           margin: 5,
           "&:hover": {
            transform: "scale3d(1.6, 1.6, 1)",
           
           }
         }}>
            
      <CardMedia 
     
        image={ logo }
        style={styles.media} 
      />
    
    
    
    </Card>
    <Card onClick={handleClick} data-value={10} sx={{
           transition: "all 0.2s ease",
           margin: 5,
           "&:hover": {
            transform: "scale3d(1.6, 1.6, 1)",
           
           }
         }}>
      <CardMedia
     
        image={ logo_2 }
        style={styles.media} 
      />
    
    
    
    </Card>
    <Card onClick={handleClick} data-value={12} sx={{
           transition: "all 0.2s ease",
           margin: 5,
           "&:hover": {
            transform: "scale3d(1.6, 1.6, 1)",
           
           }
         }}>
      <CardMedia
     
        image={ logo_3 }
        style={styles.media} 
      />
    
    
    
    </Card>

    <Card  onClick={handleClick} data-value={15} sx={{
           transition: "all 0.2s ease",
           margin: 5,
           "&:hover": {
            transform: "scale3d(1.6, 1.6, 1)",
           
           }
         }}>
      <CardMedia
     
        image={ logo_4 }
        style={styles.media} 
      />
    
    
    
    </Card>
    </div>}
    {isOpen && <span><p>Wie bald nach dem Aufwachen, rauchst du die erste Zigarette?</p> </span>}
   {isOpen && <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth required >
        <InputLabel id="demo-simple-select-label"sx={{
          
          color: "white",
         
       }}>Bitte auswählen</InputLabel>
        <Select sx={{
          
            color: "white",
           
         }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Bitte auswählen"
          onChange={handleChange}
        >
          <MenuItem value={"<5 min"}>Innerhalb von 5 Minuten</MenuItem>
          <MenuItem value={"6-30 min"}>Nach 6-30 Minuten</MenuItem>
          <MenuItem value={"31-60 min"}>Nach 31-60 Minuten</MenuItem>
          <MenuItem value={">60 min"}>Nach über 60 Minuten</MenuItem>
        </Select>
      </FormControl>
    </Box> }
    {isOpen && <button type="button" onClick={handleSubmit}>  Weiter</button>}
 
  </div>
);


}

export default MyForm_2;
