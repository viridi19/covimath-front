import React, { useState } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
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

const GlobalMapCard = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div>
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader
          title="Clique nas outras cidades"
        />
        <Divider />
        <CardContent>
          <Map />
        </CardContent>
      </Card>
    </div>
  );
};

GlobalMapCard.propTypes = {
  className: PropTypes.string
};

export default GlobalMapCard;
