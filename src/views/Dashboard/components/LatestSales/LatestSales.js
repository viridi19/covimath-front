import React from 'react';

import {
  Card,
  CardContent,
  TextField
} from '@material-ui/core';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import Map from './components/Map';

const useStyles = makeStyles(() => ({
  root: {},
  searchInput: {
    background: '#fff',
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.searchInput}
        variant="outlined"
        color="white"
        fullWidth
        placeholder="Ex: São Paulo"
        label="Buscar cidades"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <br />
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardContent>
          <Map />
        </CardContent>
      </Card>
    </div>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
