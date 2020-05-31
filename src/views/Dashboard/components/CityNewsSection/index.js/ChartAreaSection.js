import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  }
}));

const ChartAreaSection = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Gráficos"
      />
      <Divider />
      <CardContent className={classes.content}>
        
      </CardContent>
    </Card>
  );
};

ChartAreaSection.propTypes = {
  className: PropTypes.string
};

export default ChartAreaSection;
