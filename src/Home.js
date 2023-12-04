import logo from './breaking_cigarette.jpeg';
import './App.css';
import Typed from 'react-typed';
import {useNavigate} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';






function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
  
    navigate('/Form');
  };
  
  const styles = {
    media: {
      marginLeft: 'auto'
    }
};
  
  return (
    <div className="App">
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
         
          <Button color="inherit"   style={styles.media} >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typed
                    strings={['Welcome to QSmoking']}
                    typeSpeed={80}
                />
                <br/>
                <button onClick={handleClick}>Getting Started</button>
        
      </header>
             
              
    </div>
  );
}




export default Home;

