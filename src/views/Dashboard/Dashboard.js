import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  GlobalMapCard,
  TwoCitiesCard,
  ChartAreaSection,
  NewsSection
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={6}
          md={6}
          xl={9}
          xs={12}
        >
          <TwoCitiesCard />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xl={9}
          xs={12}
        >
          <GlobalMapCard />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={9}
          xs={12}
        >
          <ChartAreaSection />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={9}
          xs={12}
        >
          <NewsSection />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
