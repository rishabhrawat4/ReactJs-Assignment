import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import merchants from '../Apis/merchants';
import AppStyles from '../Style/AppStyle'
import MerchantTable from './MerchantTable';
import Detail from './Detail';
import Homepage from './Homepage';

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
    <Router>
    
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/details" component={Detail} />
    </Switch>
    </Router>
  )
}

export default App;