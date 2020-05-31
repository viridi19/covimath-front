import React from 'react'
import { Card, CardContent, CardHeader, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });

export default function Section({ color, title, content }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardHeader title={title} />
            <CardContent style={{ backgroundColor: color }}>
                <div style={{ marginBottom: 30, marginTop: 10 }}>
                    <Typography
                        align="center"
                        component="p"
                        style={{ color: '#fff', fontSize: 40 }}
                    >
                        {content}
                    </Typography>
                </div>
                <div style={{ marginBottom: 30 }}>
                    <Typography
                        align="center"
                        component="p"
                        style={{ color: '#fff', fontSize: 40 }}
                    >
                        86%
                    </Typography>
                </div>
                <Table style={{ backgroundColor: '#fff' }} className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>IDH Educação</TableCell>
                        <TableCell align="right">IDH Saude</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell>34.0</TableCell>
                        <TableCell align="right">25.0</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
