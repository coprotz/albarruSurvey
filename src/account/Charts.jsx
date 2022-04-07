import React from 'react'
import Chart from "react-apexcharts";
import ApexCharts from 'apexcharts'

const Charts = ({series, labels}) => {


    const options = {
        // series: {series},
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

    //   const series = [4, 8, 13]
  


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
