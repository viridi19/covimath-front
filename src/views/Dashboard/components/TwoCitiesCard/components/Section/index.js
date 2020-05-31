import React from 'react'
import { Card, CardContent, CardHeader, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    table: {
        height: '100%',
    }
  });

export default function Section({ color, title, content, list,percent }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ width: '100%' }} >
            <CardHeader title={title} />
            <CardContent style={{ backgroundColor: color, width: '100%' }}>
                <div style={{ marginBottom: 30, marginTop: 10 }}>
                    <Typography
                        align="center"
                        component="p"
                        style={{ color: '#fff', fontSize: 40 }}
                    >
                        {content}
                        {!content && '--'}
                    </Typography>
                </div>
                <div style={{ marginBottom: 30 }}>
                    <Typography
                        align="center"
                        component="p"
                        style={{ color: '#fff', fontSize: 40 }}
                    >
                        {percent}
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
                            {!list && (
                                <TableCell> -- </TableCell>
                            )}
                            {list && list.map(item => (
                                <TableCell key={item.name}>{item.value}</TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
