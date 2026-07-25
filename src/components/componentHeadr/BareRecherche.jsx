import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import "./component.css";
export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      className='responsive-input'
      sx={{ p: '2px 4px',marginLeft:4, display: 'flex', alignItems: 'center', width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Product"
        inputProps={{ 'aria-label': 'Search Product' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}