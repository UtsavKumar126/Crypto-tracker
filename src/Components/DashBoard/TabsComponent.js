import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from './Grid';
import List from './List';
import dashCss from "../../css/dashboard.css" 

export default function TabsComponent({coins,setSearch}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style={
    color:"var(--color-element)",
    fontSize:"1.2rem",
    fontWeight:"600",
    textTransform:"capitalize"
  }
  const theme=createTheme({
    palette: {
      primary: {
        main: '#3A80E9',
      },
    } 
  });

  return (
    coins.length===0 ? 
    <div className='No-found'>
      <div>No Data Found...</div>
      <button onClick={(e)=>setSearch("")}>Clear Search</button>
    </div>:
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth" >
            <Tab label="Grid" value="1" sx={style}/>
            <Tab label="List" value="2" sx={style}/>
          </TabList>
        </div>
        <TabPanel value="1">
           <div className='grid-view'>
            {coins.map((coin,i)=>(
              <Grid coin={coin} key={i} delay={(i%4)*0.2}/>
            ))}
           </div>
        </TabPanel>
        <TabPanel value="2">
        <table className='list'>
            {coins.map((coin,i)=>(
              <List coin={coin} key={i} delay={(i%8)*2}/>
            ))}
        </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
