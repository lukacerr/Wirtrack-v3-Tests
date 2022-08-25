import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Iframe from 'react-iframe';
import './style.scss';

function MainNav() {
  let showNAF = true;
  const toggleNAF = () => {
    // TODO
    console.log('toggle');
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Wirtrack v2, embed en React!</Typography>
        <Button onClick={toggleNAF} variant="contained">
          Toggle nav & footer
        </Button>
      </Toolbar>
    </AppBar>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainNav />
    <Iframe frameBorder={0} id="v2-frame" url={import.meta.env.VITE_V2_URL} />
    <Box component="footer">
      <Typography variant="h6">{`Wirtrack - © 2011-${new Date().getFullYear()} Wirsolut S.A.`}</Typography>
    </Box>
  </React.StrictMode>
);
