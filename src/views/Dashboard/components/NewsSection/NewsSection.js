import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Grid,
} from '@material-ui/core';

import NewsCityCard from './components/NewsCityCard';
import NewsDiffCard from './components/NewsDiffCard';

const TwoCitiesCard = props => {
  const { className, ...rest } = props;
  const diff = useSelector(state => state.auth.diff);
  const city = useSelector(state => state.auth.city)

  return (
      <Grid
        container
        spacing={1}
        alignItems="center"
      >
        <Grid item xs={6}>
          <NewsCityCard title={`Notícias de ${city?.name}`} />
        </Grid>
        <Grid item xs={6}>
          <NewsDiffCard title={`Notícias de ${diff?.name}`} />
        </Grid>
      </Grid>
  );
};

TwoCitiesCard.propTypes = {
  className: PropTypes.string
};

export default TwoCitiesCard;
