import React, { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardMedia,Typography, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import api from 'services/api';

const useStyles = makeStyles({
    root: {
		width: '100%',
		display: 'flex'
	},
	bullWord: {
		backgroundColor: "rgb(228, 228, 228)",
		borderRadius: 10,
		display: "inline-block",
		paddingRight: 4,
		paddingLeft: 4,
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 120,
		height: 120,
		borderRadius: "50%",
		margin: 15
	},
	displayFlex: {

	},
	datetime: {
		display: 'flex',
		fontSize: 13,
		paddingLeft: 9, 
		marginTop: -7,
		color: "rgb(100,100,100)"
	}
  });

export default function NewsCityCard() {
	const city = useSelector(state => state.auth.city);
	const [news, setNews] = useState(null);

	const getNews = useCallback(async () => {
		try {
			const response = await api.get(`news?city=${city}`)

			setNews(response);

			console.log(news)
		} catch (err) {
			console.log('error load news')
		}
	}, []);

	useEffect(() => {
		if(!!city) {
		  getNews();
		}
	}, [city]);

    const classes = useStyles();
    return (
		<Card className={classes.root} >
			<CardContent className={classes.content}>
				<Typography className={classes.title} component="h3" color="textSecondary" gutterBottom>
					Noticia de maior destaque
				</Typography>
				<Typography variant="h2" component="h2">
					<a className={classes.details} display="inline" href="" className="cityLink" target="_blank"></a>
					<p className={classes.datetime}></p>
				</Typography>
				<Typography variant="body2" color="textSecondary">
				</Typography>
				<Typography variant="h4" component="h4">
				
				</Typography>
		</CardContent>
		<CardMedia
			className={classes.cover}
			image=""
			title="New image"
		/>
	</Card>
    )
}
