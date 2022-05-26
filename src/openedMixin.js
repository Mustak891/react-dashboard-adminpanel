import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import DownloadIcon from '@mui/icons-material/Download';
import { Chart } from './Chart';
import { Dashboard } from './Dashboard';
import  { Projectsandillutions, Colorsandapproach } from './App'
import { Link } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";

export const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);
export function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "white", color: "blue" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>






          <input className='searchbar' placeholder='search for...'></input>
          <Button variant="contained">
            <IconButton color="primary" aria-label="add to shopping cart">
              <SearchIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button variant="text" sx={{ display: "flex", marginLeft: "auto" }}>
            <IconButton color="primary" aria-label="add to shopping cart">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>
          </Button>
          <Button variant="text">
            <IconButton color="primary" aria-label="add to shopping cart">
              <Badge badgeContent={7} color="error">
                <MailIcon color="action" />
              </Badge>
            </IconButton>
          </Button>
          <p className='adminname'>Ajay</p><span><Avatar alt="Aemy Sharp" src="./ajay themad.png" /></span>





        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[<Link to='/' style={{textDecoration: "none", color: "black"}} >Dashboard</Link>].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 50,
                  justifyContent: open ? 'initial' : 'center',
                  px: 3,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <Link to='/'> <DashboardIcon style={{color: "grey"}}/> </Link> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <span style={{ paddingLeft: "5px", fontSize: "10px", fontWeight: "bold", color: "gray" }}>INTERFACE</span>
          {[<Link to='/components' style={{textDecoration: "none", color: "black"}} >Components</Link>, <Link to='/utilites' style={{textDecoration: "none", color: "black"}} >Utilites</Link>].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <Link to='/components'><SettingsIcon style={{color: "grey"}} /></Link> : <Link to='/utilites'><BuildIcon style={{color: "grey"}} /></Link>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <span style={{ paddingLeft: "5px", fontSize: "10px", fontWeight: "bold", color: "gray" }}>ADDONS</span>
          {[<Link to='/pages' style={{textDecoration: "none", color: "black"}} >Pages</Link>, <Link to='/charts' style={{textDecoration: "none", color: "black"}} >Charts</Link>].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <Link to='/pages'><FolderIcon style={{color: 'grey'}} /></Link> : <Link to='/charts'><SsidChartIcon style={{color: 'grey'}} /></Link>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div className='dashboardButton'>
          <h3>Dashboard</h3>
          <Button variant="contained"><DownloadIcon color="action" />Generate report</Button>
        </div>
        <Routes>
        <Route path="/" element={[<Dashboard />, <Chart />, <Projectsandillutions />, <Colorsandapproach />]} />
        <Route path="/components" element={<Router />} />
        <Route path="/utilites" element={<Router2 />} />
        <Route path="/pages" element={<Router3 />} />
        <Route path="/charts" element={<Router4 />} />
      </Routes>
      </Box>
    </Box>
  );
}

function Router() {
  return (
    <div className="router">
      Components
    </div>
  );
}

function Router2() {
  return (
    <div className="router">
      Utilites
    </div>
  );
}

function Router3() {
  return (
    <div className="router">
      Pages
    </div>
  );
}

function Router4() {
  return (
    <div className="router">
      Chart
    </div>
  );
}