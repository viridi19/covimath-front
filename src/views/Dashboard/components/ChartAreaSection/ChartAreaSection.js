import React from 'react';
import PropTypes from 'prop-types';

import LineChart from './components/LineChart';
import { Grid } from '@material-ui/core';

const ChartAreaSection = props => {
  const { className, ...rest } = props;

  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={6} xl={9} xs={12}>
        <LineChart title="Relative humidity and possible anomalies" city="" diff="" />
      </Grid>
      <Grid item lg={6} md={6} xl={9} xs={12}>
        <LineChart title="Average temperature and possible anomalies" city="" diff="" />
      </Grid>
    </Grid>
  );
};

ChartAreaSection.propTypes = {
  className: PropTypes.string
};

export default ChartAreaSection;
