import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

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

  const [notifications] = useState([]);

  const fetchList = useCallback(() => {
    dispatch(fetchRequest());
  });

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
