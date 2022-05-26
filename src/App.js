import './App.css';
import * as React from 'react';
// import TableChartIcon from '@mui/icons-material/TableChart';
import { MiniDrawer } from './openedMixin';


function App() {
  return (
    <div className="App">
      <MiniDrawer />
    </div>
  );
}


export function Projectsandillutions(){
  return(
    <div className='mainProjects'>
      <div className='projectheight'>
        <h3 className='Projects'>PROJECTS</h3>
        <div className='firstproject'>
        <span>Server Migration</span>
        <span>20%</span>
      </div>
      <progress className='progress' id="file" value="20" max="100"></progress>
      <div className='firstproject'>
        <span>Sales Tracking</span>
        <span>40%</span>
      </div>
      <progress className='progress1' id="file" value="40" max="100"></progress>
      <div className='firstproject'>
        <span>Customer Database</span>
        <span>60%</span>
      </div>
      <progress className='progress2' id="file" value="60" max="100"></progress>
      <div className='firstproject'>
        <span>Payout Detailsn</span>
        <span>80%</span>
      </div>
      <progress className='progress3' id="file" value="80" max="100"></progress>
      <div className='firstproject'>
        <span>Account Setup</span>
        <span>100%</span>
      </div>
      <progress className='progress4' id="file" value="100" max="100"></progress>
      </div>
      <div className='projectheight2'>
        <h3 className='Projects'>Illustrations</h3>
        <img className='downimage' src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt='' />
        <p className='imgpara'>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
        <code className='linkpara' href='#' >Browse Illustrations on unDraw →</code>
       </div>
    </div>
  )
}


export function Colorsandapproach(){
  return(
    <div className='totaldiv'>
    <div className='importantmaninprimary'>
      <div className='mainprimary'>
      <div className='Primary'>
       <span>Primary</span><span className='s'>#4e73df</span>
      </div>
      <div className='Success'>
       <span>Success</span><span className='s'>#1cc88a</span>
      </div>
      </div>
      <div className='mainprimary'>
      <div className='Info'>
       <span>Info</span><span className='s'>#36b9cc</span>
      </div>
      <div className='Warning'>
       <span>Warning</span><span className='s'>#f6c23e</span>
      </div>
      </div>
      <div className='mainprimary'>
      <div className='Danger'>
       <span>Danger</span><span className='s'>#e74a3b</span>
      </div>
      <div className='Secondary'>
       <span>Secondary</span><span className='m'>#4e73df</span>
      </div>
      </div>
      <div className='mainprimary'>
      <div className='Light'>
       <span>Light</span><span className='s'>#f8f9fc</span>
      </div>
      <div className='Dark'>
       <span>Dark</span><span className='s'>#4e73df</span>
      </div>
      </div>
    </div>
    <div className='Development Approach'>
    <div className='projectheight2'>
        <h3 className='Projects'>Development Approach</h3>
        <p className='imgpara'>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
       </div>
      </div>
      <div className='last'>Copyright © Your Website 2021</div>
    </div>
  )
}

export default App;
