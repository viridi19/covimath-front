import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
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
  const city = useSelector(state => state.auth.city);
  const diff = useSelector(state => state.auth.diff);

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
