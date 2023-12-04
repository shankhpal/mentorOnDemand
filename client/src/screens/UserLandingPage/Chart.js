import React from 'react'

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "../../constants/myCoursesConstant";
 
  const labelContent = e => e.category;
  
  const Charts = (props) => {
    const myprogress = [
        {
          status: "completed",
          value: props.completed,
          color: COLORS.accepted,
        },
       
        {
          status: "Pending",
          value: props.pending,
          color: COLORS.pending,
        },
      ];
      
    
 
    return (
      <Chart>
        <ChartTitle className='font-weight-bold' text="My progress" />
        <ChartLegend visible={false} />
        <ChartSeries>
          <ChartSeriesItem
            type="donut"
            data={myprogress}
            categoryField="status"
            field="value"
          >
            <ChartSeriesLabels
              color="#fff"
              background="none"
              content={labelContent}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    );
  };
  
  export default Charts;