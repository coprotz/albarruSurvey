import React from 'react'
import Chart from "react-apexcharts";

const Charts = ({series, labels}) => {


    const options = {
        labels: labels,
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true
                        }
                    }
                }
            }
        }
      }

 
  return (
    <Chart 
        type='donut' 
        series={series}
        options={options}
        width='100%'
        height='300px'        
    />
  )
}

export default Charts
