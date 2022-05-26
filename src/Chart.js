import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export function Chart() {

  return (
    <div className='chartsrow'>
      <div className='chartsheading'>
        <span className='line'>EARNINGS OVERVIEW <MoreVertIcon color='action' /></span>
        <span className='linechart'><img src="https://s3.amazonaws.com/assets.fullstack.io/n/20200309095518221_react-chartjs.png" alt="Girl in a jacket" width="600" height="400" /></span>
      </div>

      <div className='chartsheading'>
        <span className='line2'>REVENUE SOURCES<MoreVertIcon color='action' /></span>
        <span className='linechart'><img src="https://chartio.com/assets/25c0ab/tutorials/charts/pie-charts/8f2915ab9024902155c5d27d430831be813de071853c69d778102722a4d0efbf/pie-chart-example-1.png" alt="Girl in a jacket" width="400" height="400" /></span>
      </div>
    </div>
  );
}
