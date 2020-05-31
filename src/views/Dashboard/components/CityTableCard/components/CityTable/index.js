import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Cidade A', 159, 80, 24),
  createData('Cidade B', 237, 70, 37),
  createData('Cidade C', 262, 65, 24),
  createData('Cidade D', 305, 62, 67),
  createData('Cidade E', 356, 50, 49),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cidade</TableCell>
            <TableCell align="center">N. Casos</TableCell>
            <TableCell align="center">% de Match</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell style={{ width: '40%', textAlign: 'center' }}>
                <Typography>{row.fat}%</Typography>
                <LinearProgress variant="determinate" value={row.fat} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}
