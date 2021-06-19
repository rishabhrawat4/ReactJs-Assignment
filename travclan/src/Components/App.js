import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import merchants from '../Apis/merchants';
import AppStyles from '../Style/AppStyle'
import MerchantTable from './MerchantTable';

const App = () => {

  const [data, setData ] = useState([]);

  const onSearchData = async() => {
    const response = await merchants.get()
    setData(response.data);
  }

  useEffect(() => {
    onSearchData();
  }, [])

  const classes = AppStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit">
            Merchants List
          </Typography>
        </Toolbar>
      </AppBar>
      <MerchantTable data={data}/>
    </div>
  )
}

export default App;