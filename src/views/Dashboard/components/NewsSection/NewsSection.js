import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
} from '@material-ui/core';

import NewsCard from './components/NewsCard';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  }
}));

const TwoCitiesCard = props => {
  const { className, ...rest } = props;
  const diff = useSelector(state => state.auth.diff);
  const city = useSelector(state => state.auth.city)

  return (
      <Grid
        container
        alignItems="center"
        spacing={1}
        alignItems="center"
      >
        <Grid item xs={6}>
          <NewsCard title={`Notícias de ${city?.name}`} />
        </Grid>
        <Grid item xs={6}>
          <NewsCard title={`Notícias de ${diff?.name}`} />
        </Grid>
      </Grid>
  );
};

TwoCitiesCard.propTypes = {
  className: PropTypes.string
};

export default TwoCitiesCard;
