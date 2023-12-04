import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

function createData(time) {
    return {time};
  }

function Analysis() {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    backgroundColor:"#282c34",
    width: 200,
    height: 200,

      title: {
      text: " "
    },
    subtitles: [{
      
      text: "Puls 100 %",
      verticalAlign: "center",
      fontSize: 14,
      fontColor: "green",
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      color: "green",
      //showInLegend: true,
    //  indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: [
      
      
        {  y: 100 },
     
      ]
    }]
  }
  const options2 = {
    animationEnabled: true,
    backgroundColor:"#282c34",
    width: 200,
    height: 200,

      title: {
      text: " "
    },
    subtitles: [{
      
      text: "Sauerstoff 100 %",
      verticalAlign: "center",
      fontSize: 14,
      fontColor: "green",
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      color: "green",
      //showInLegend: true,
    //  indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: [
      
      
        {  y: 100 },
     
      ]
    }]
  }
  const options3 = {
    animationEnabled: true,
    backgroundColor:"#282c34",
    width: 200,
    height: 200,

      title: {
      text: " "
    },
    subtitles: [{
      
      text: "Kohlenmonoxid 100 %",
      verticalAlign: "center",
      fontSize: 12,
      fontColor: "green",
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      color: "green",
      //showInLegend: true,
    //  indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: [
      
      
        {  y: 100 },
     
      ]
    }]
  }

  const options4 = {
    animationEnabled: true,
    backgroundColor:"#282c34",
    width: 200,
    height: 200,

      title: {
      text: " "
    },
    subtitles: [{
      
      text: "Nikotin 100 %",
      verticalAlign: "center",
      fontSize: 12,
      fontColor: "green",
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      color: "green",
      //showInLegend: true,
    //  indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: [
      
      
        {  y: 100 },
     
      ]
    }]
  }
  const nonsmoked_time = [
        createData(JSON.parse(localStorage.getItem('Datum:'))),
        
      ];
 
     var current_date = new Date(); 
     const stoppedsmoking_date =  nonsmoked_time.map(penis => penis.time)
     const stoppedsmoking_date_formatted = stoppedsmoking_date[0].toString();
     const [day, month, year] = stoppedsmoking_date_formatted.split('.');
     const formattedDate = new Date(year, month - 1, day);
     const differenceinms = current_date - formattedDate;
     const differenceInDays = differenceinms / (1000 * 60 * 60 * 24);
     const daysstring = differenceInDays.toString().split('.');
     const final_Days = Math.floor(daysstring[0] / 7);
     const decimal_shit = Math.round((differenceInDays % 7).toFixed(2));
     const time = localStorage.getItem('Uhrzeit:');
     const hours_final = time.substring(0, time.indexOf(","));
     var minutes_final = time.substring(time.indexOf(",") + 1) 
    const MyDate = new Date();
    MyDate.setHours(hours_final);
    MyDate.setMinutes(minutes_final);
    var hours_diff =  current_date.getHours() - MyDate.getHours() + 'H';
    
    if(current_date.getHours() === 0 ){
     hours_diff = 24 - MyDate.getHours()+ 'H'
    }
    
    
   

    return (

      <div className='hotfix3'>
      <div className='Form-wrapper3' >
        <p>
          <label>Rauchfreie Zeit:<br /></label>
          {final_Days !== 0 && <>{final_Days}W </>}
          {decimal_shit !== 0 && <>{decimal_shit}T </>}
          {hours_diff !== '0H' && <>{hours_diff}</>}
        </p>
        </div>
   
<div className='charts-container'>

        <CanvasJSChart options = {options}
       
        />
        <CanvasJSChart options = {options2}
       
       />
         <CanvasJSChart options = {options3}
       
       />
          <CanvasJSChart options = {options4}
       
       />

</div>
      </div>
    );
}

export default Analysis;
