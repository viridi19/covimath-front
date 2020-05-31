import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import SearchAutoComplete from '../../../../components/SearchAutoComplete';

import { fetchRequest } from '../../../../store/modules/auth/actions';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  logo: {
    marginRight: 20
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const dispatch = useDispatch();

  const classes = useStyles();

  const fetchList = useCallback(() => {
    dispatch(fetchRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <SearchAutoComplete />
        <div className={classes.flexGrow} />
          <RouterLink to="/" mdDown>
            <img
              alt="Logo"
              src="images/logos/logo.png"
              className={classes.logo}
            />
          </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
