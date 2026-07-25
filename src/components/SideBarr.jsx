import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./component.css";
import { useState } from 'react';
export default function SideBarr({width}) {
    const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen)=>{
    setOpen(newOpen);
  };
  const myList = width >950 ?  ['Dashbord', 'favorise', 'arabia'] : ['Dashbord', 'favorise', 'arabia',"All Product",'Filter Products','Categories','Users']
  const DrawerList = (
    <Box sx={{ width: 150 }} role="presentation" onClick={width >950 ? ()=>{toggleDrawer(false)}:undefined}>
      <List className='list-sider'>
        {myList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <DashboardIcon /> : index === 1?  <FavoriteIcon/> :<AddShoppingCartIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Button  variant="outlined" sx={{marginTop:1 , marginLeft:1,width:"90%"}} endIcon={<ArrowForwardIcon/>}>
 Login
</Button>
    </Box>
  );
if(width >950){
 return (
    <div className='bg-[#f5f5f5] sidebare'>
        {DrawerList}
    </div>
  );
}else{
  return (
    <div className='menu'>
      <Button onClick={(e)=>{ e.currentTarget.blur();toggleDrawer(true)}} sx={{color:"white"}}><MenuIcon/></Button>
      <Drawer open={open} onClose={()=>{toggleDrawer(false)}}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
 
}
