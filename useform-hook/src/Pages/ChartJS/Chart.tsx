import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChartGraph = () => {

  return (
    <div>
        <Bar
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug"],
            datasets: [
              {
                label: 'Transactions',
                data: [14000, 60000, 11000, 190000, 40000, 180000, 90000, 40000],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={200}
          width={300}   
          options={{   
            responsive: true,  
            maintainAspectRatio: true, 
            aspectRatio: 2, 
             plugins: {
                legend: {                                    
                 display: true,
                     position:'bottom', 
                     labels:{
                        padding: 40
                     },                                  
                  },
                },                           
             }} 
        />
    </div>
  )
}

export default BarChartGraph;