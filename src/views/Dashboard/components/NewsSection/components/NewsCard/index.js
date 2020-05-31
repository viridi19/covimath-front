import React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });

export default function NewsCard({ title, content }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardHeader title={title} />
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
}
