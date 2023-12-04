import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import NumericInput from 'react-numeric-input';
import {useNavigate} from 'react-router-dom'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import dayjs from 'dayjs';

function MyForm() {


  
  const [isOpen, setOpen] = React.useState(
    JSON.parse(localStorage.getItem('is-open')) || true
  );

   function handleToggle() {
    localStorage.setItem('is-open', JSON.stringify(!isOpen));

    setOpen(!isOpen);

  }

  const navigate = useNavigate();

  const handleSubmit = () => {
  
    navigate('/Form_2');
  };

  const [value, setValue] = React.useState(dayjs());

  const [value2, setValue2] = React.useState(dayjs());

  const handleInputChange = (newValue) => {
    setValue(newValue);
    localStorage.setItem('Anzahl', JSON.stringify(newValue));
  };





  // First Try with another DatePicker libary 
  // const [value, setValue] = useState(0);

 /* const Example = () => {
    
    const [startDate, setStartDate] = useState(new Date());

 
    return (
<DatePicker selected={startDate} onChangeRaw={localStorage.setItem('Datum:', JSON.stringify(startDate.toLocaleDateString()))} onChange={(date) => setStartDate(date)} onCalendarClose={(handleToggle)} />
    );
  }; */
  
return (
  <div className="Form-wrapper">
    <form >
    {isOpen && <label><p>Wann hast du mit dem Rauchen aufgehört ?</p> </label> }
   
    
    {isOpen && <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={value}
          onChange={(newValue) => setValue(newValue,  localStorage.setItem('Datum:',  JSON.stringify(new Date(newValue).toLocaleDateString())))}
          onAccept={handleToggle}
          maxDate={dayjs()}
         />
    </LocalizationProvider>} 
{!isOpen &&     <LocalizationProvider dateAdapter={AdapterDayjs}>
 
        <TimePicker
          value={value2}
          label="Zur welcher Uhrzeit?"
          ampm={false}
          onChange={(newValue2) => setValue2(newValue2,  localStorage.setItem('Uhrzeit:',  [new Date(newValue2).getUTCHours()+1,  new Date(newValue2).getUTCMinutes()]))}
        />
   
    </LocalizationProvider>}


    
   {!isOpen && <label><p>Wie viele Zigaretten hast du täglich geraucht?</p> </label>}
   {!isOpen && <NumericInput min={0} max={20} mobile={true} placeholder={'Trage eine Anzahl ein'} step={1} strict required  value={value} onChange={handleInputChange}/>}
   {!isOpen && <button type="button" onClick={handleSubmit}>  Weiter</button>}
   
</form>

</div>

);


}



export default MyForm;
