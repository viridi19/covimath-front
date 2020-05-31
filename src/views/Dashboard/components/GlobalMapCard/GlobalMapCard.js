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

const list = [
  { markerOffset: -15, name: "Rio Branco", coordinates: [-67.8662019, -9.9862442] },
  { markerOffset: -15, name: "Maceió", coordinates: [-35.7568902, -9.5943984] },
  { markerOffset: -15, name: "Macapá", coordinates: [0.1019439, -51.1670724] },
  { markerOffset: -15, name: "Manaus", coordinates: [-60.1075319, -3.0443101] },
  { markerOffset: -15, name: "Salvador", coordinates: [-38.490317, -12.9015883] },
  { markerOffset: 25, name: "Fortaleza", coordinates: [-38.5891584, -3.7899266] },
  { markerOffset: 25, name: "Brasília", coordinates: [-48.0779611, -15.7744219] },
  { markerOffset: 25, name: "Brasília", coordinates: [-49.4446947, -16.6954997] },
  { markerOffset: 25, name: "Goiânia", coordinates: [-48.0779611, -15.7744219] },
  { markerOffset: 25, name: "São Luís", coordinates: [-44.4383634, -2.6271281] },
  { markerOffset: -15, name: "Cuiabá", coordinates: [-48.0779611, -15.7744219] },
  { markerOffset: 25, name: "Campo Grande", coordinates: [-54.7057456, -20.4809249] },
  { markerOffset: 25, name: "Belo Horizonte", coordinates: [-44.0342617, -19.9025411] },
  { markerOffset: 25, name: "Belém", coordinates: [-48.5205932, -1.3411793] },
  { markerOffset: -20, name: "João Pessoa", coordinates: [-34.9518092, -7.1464332] },
  { markerOffset: 25, name: "Recife", coordinates: [-49.4302249, -25.4947398] },
  { markerOffset: 25, name: "Teresina", coordinates: [-42.8112899, -5.0935648] },
  { markerOffset: 25, name: "Rio de Janeiro", coordinates: [-43.7268521, -22.9132513] },
  { markerOffset: 25, name: "Natal", coordinates: [-35.2924559, -5.7997438] },
  { markerOffset: 25, name: "Porto Alegre", coordinates: [-51.3175682, -30.1084984] },
  { markerOffset: 25, name: "Porto Velho", coordinates: [-63.8900121, -8.7564592] },
  { markerOffset: 25, name: "Boa Vista", coordinates: [-36.2463902, -7.2660776] },
  { markerOffset: 25, name: "Florianópolis", coordinates: [-48.7511475, -27.5707043] },
  { markerOffset: 25, name: "São Paulo", coordinates: [-46.8761689, -23.6815303] },
  { markerOffset: 25, name: "Aracaju", coordinates: [-37.1733679, -11.0058313] },
  { markerOffset: 25, name: "Palmas", coordinates: [-48.417446, -10.2598832] },
];

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
          <Map list={list} />
        </CardContent>
      </Card>
    </div>
  );
};

GlobalMapCard.propTypes = {
  className: PropTypes.string
};

export default GlobalMapCard;
