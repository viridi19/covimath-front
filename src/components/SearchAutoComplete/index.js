// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase, Button, TextField, MenuItem } from '@material-ui/core';

import { selectCity, fetchRequest } from '../../store/modules/auth/actions';
import api from '../../services/api';

import data from '../../assets/data';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.90),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xl')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAutoComplete() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const city = useSelector(state => state.auth.city);

  const handleSelectCity = useCallback(async (city) => {
    dispatch(fetchRequest(city));
  }, [dispatch]);

  const handleChange = (event) => {
    const selected = event.target.value;

    const c = data.find(item => item.name === selected)

    if(!c) {
      return
    }

    handleSelectCity(c.name);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
      <div className={classes.search}>
        <TextField
          fullWidth
          placeholder="Buscar cidade"
          variant="outlined"
          select
          value={city?.name}
          onChange={handleChange}
          size="small"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        >
          {data.map((option) => (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}
