import React, {useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Gid from '@mui/material/Grid';
import {PaperHead} from "./components/PaperHead";
import {TableHead} from "./components/TableHead";
import {AddBlock} from "./components/AddBlock";
import {Sensor} from './types/sensor';
import {TableElement} from "./components/TableElement";

const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', sans-serif`
  },
  palette: {
    primary: {
      main: '#F4F4F4',
      dark: '#424242'
    },
    secondary: {
      main: '#707070',
      dark: '#E4E4E4',
      light: '#FABB3B'
    },
    text: {
      primary: '#F8BC3A',
      secondary: '#B7B7B7',
    },
    background: {
      paper: '#fff',
    },
  },

});



function App() {
  const [sensors, setSensors] = useState<Sensor[]>([
    {
      id: 1234578,
      status: true,
      model_number: '123456',
      model_name: 'SW1',
      temp: 70,
      is_Active: false
    },
    {
      id: 1234577,
      status: false,
      model_number: '123456',
      model_name: 'SW1',
      temp: 17,
      is_Active: false
    },
    {
      id: 1234576,
      status: true,
      model_number: '123456',
      model_name: 'SW1',
      temp: 19,
      is_Active: true
    },
    {
      id: 1234575,
      status: true,
      model_number: '123456',
      model_name: 'SW1',
      temp: 10,
      is_Active: false
    },
  ])
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100%',
        height: '100vh',
        padding: '30px',
        backgroundColor: 'primary.main',
        display: 'flex',
        '& .MuiPaper-elevation0': {
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
          width: 673
        },
        '& .MuiPaper-elevation1': {
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
          width: 317,
          marginLeft: '16px'
        }
      }}>
        <Paper elevation={0}>
          <PaperHead text={'Датчики температуры'}/>
          <TableHead/>
          <AddBlock/>
          {sensors.map(sensor => TableElement(sensor))}
        </Paper>
        <Paper elevation={1}>124</Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
