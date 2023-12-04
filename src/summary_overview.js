import React, { useEffect,useState  } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import {useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const actions = [

    { icon: <SaveIcon />, name: 'Save' },
  ];


function Summary() {
  const [rows, setRows] = useState([  createData('Ihre Angaben:', JSON.parse(localStorage.getItem('Datum:')), JSON.parse(localStorage.getItem('Anzahl')), JSON.parse(localStorage.getItem('Packungspreis:')), JSON.parse(localStorage.getItem('Erste Zigarette:')))]);
  const handleStorageChange = (event) => {
    if (event.key === 'Datum:' || event.key === 'Anzahl' || event.key === 'Packungspreis:' || event.key === 'Erste Zigarette:' ) {
      // The value associated with 'yourLocalStorageKey' has changed
      const newValue = event.newValue;
      
      console.log('localStorage value changed: ' + newValue);
      const newData = JSON.parse(event.newValue);
      setRows([createData('Ihre Angaben:', JSON.parse(localStorage.getItem('Datum:')), JSON.parse(localStorage.getItem('Anzahl')), JSON.parse(localStorage.getItem('Packungspreis:')), JSON.parse(localStorage.getItem('Erste Zigarette:')))]);
      // Perform any actions you need with the updated value
    }
  };

  useEffect(() => {
    // Add event listener for the storage event
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);// 
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      const tableRef = useRef(null);
      const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Ihre Daten',
        sheet: 'Rauchstatistik'
    })
    const navigate = useNavigate();
 

    const handleClick_2 = () => {
    
      navigate('/analysis');

    };
  
return (
    
  <div className="Form-wrapper">
  
  <TableContainer component={Paper} sx={{ maxWidth: 1000 }} ref={tableRef}>
      <Table sx={{ maxWidth: 1000 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>Daten:</StyledTableCell>
            <StyledTableCell align="right">Startdatum:</StyledTableCell>
            <StyledTableCell align="right">Täglich gerauchte Zigaretten</StyledTableCell>
            <StyledTableCell align="right">Packungspreis:</StyledTableCell>
            <StyledTableCell align="right">Erste Zigarette am Tag:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <Button variant="contained" endIcon={<QueryStatsIcon />} onClick={handleClick_2}>
        Auswertung
      </Button>

<div className='hotfix2'>

    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', left: 450 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={onDownload}
          />
        ))}
      </SpeedDial>
    </Box>
    </div>
</div>
);


}

export default Summary;
