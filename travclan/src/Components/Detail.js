import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent,
          Typography,
          Card,
          Avatar,
          Grid
        } from '@material-ui/core';
import DetailsTable from './DetailsTable';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

}));

const Detail = (props) => {
    const [item, setItem] = useState(props.location.state.item);
    const classes = useStyles();
    
    return(
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Avatar className={classes.large} src={item.avatarUrl}></Avatar>
              <Typography variant="h5" component="h2">
                Name: {item.firstname} {item.lastname}
              </Typography>
              <Typography variant="h5" component="h2">
                Email: {item.email}
              </Typography>
              <Typography variant="h5" component="h2">
                Phone: {item.phone}
              </Typography>
              <Typography variant="h5" component="h2">
                Premium: {item.hasPremium ? "Yes" : "No"}
              </Typography>
            </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <DetailsTable bids={item.bids} />
      </Grid>
    </Grid>
    )
}

export default Detail