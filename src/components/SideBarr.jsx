import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./component.css";
export default function SideBarr() {
  const DrawerList = (
    <Box sx={{ width: 150 }} role="presentation">
      <List className='list-sider'>
        {['Dashbord', 'favorise', 'arabia'].map((text, index) => (
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
      <Button variant="outlined" sx={{marginTop:1 , marginLeft:1,width:"90%"}} endIcon={<ArrowForwardIcon/>}>
 Login
</Button>
    </Box>
  );

  return (
    <div className='bg-[#f5f5f5] sidebare'>
        {DrawerList}
    </div>
  );
}
