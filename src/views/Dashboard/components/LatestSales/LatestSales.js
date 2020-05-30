import React from 'react';

import {
  Card,
  CardContent,
  TextField
} from '@material-ui/core';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

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
          <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
              }
            </Geographies>
        </ComposableMap>
        </CardContent>
      </Card>
    </div>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
