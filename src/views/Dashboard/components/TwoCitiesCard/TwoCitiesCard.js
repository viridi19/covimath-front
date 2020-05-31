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

import Section from './components/Section';

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
  const diff = useSelector(state => state.auth.diff)

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Comparativo"
      />
      <Divider />
      <CardContent>
        <Grid container alignItems="center">
            <Grid item>
                <Section />
            </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item>
            {diff?.name}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TwoCitiesCard.propTypes = {
  className: PropTypes.string
};

export default TwoCitiesCard;
