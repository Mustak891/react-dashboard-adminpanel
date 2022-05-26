import * as React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export function Dashboard() {

  return (
    <div className='fourbox'>
      <div className='firstbox'><h6 className='fourboxhead'>EARNINGS (MONTHLY)</h6><h6>$40,000</h6>
        <span className='boxicon'><CalendarTodayIcon color='action' sx={{ fontSize: 40 }} /></span>
      </div>
      <div className='secondbox'><h6 className='fourboxhead2'>EARNINGS (ANNUAL)</h6><h6>$215,000</h6>
        <span className='boxicon'><MonetizationOnOutlinedIcon color='action' sx={{ fontSize: 40 }} /></span>
      </div>
      <div className='thirdbox'><h6 className='fourboxhead3'>TASKS</h6><h6>50%</h6>
        <span className='boxicon'><ListAltOutlinedIcon color='action' sx={{ fontSize: 40 }} /></span>
      </div>
      <div className='fourthbox'><h6 className='fourboxhead4'>PENDING REQUESTS</h6><h6>18</h6>
        <span className='boxicon'><ChatBubbleOutlineIcon color='action' sx={{ fontSize: 40 }} /></span>
      </div>
    </div>
  );
}
