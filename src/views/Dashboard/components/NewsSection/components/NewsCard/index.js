import React from 'react'
import { Card, CardContent, CardMedia,Typography, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

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

export default function NewsCard({ title, content }) {
    const classes = useStyles();
    const res = {
        news: {
          filled: true,
          author: "Estadão Conteúdo",
          title: "Com 25 mortes por coronavírus, sistema prisional continuará sem visita em SP",
          description: "Segundo a Secretaria de Administração Penitenciária, 12 óbitos são de detentos e 13 de funcionários",
          url: "https://www.terra.com.br/vida-e-estilo/saude/com-25-mortes-por-coronavirus-sistema-prisional-continuara-sem-visita-em-sp,75337fb53658d9b9dadd8cb8c3604c28diu4ea5f.html",
          urlToImage: "http://p2.trrsf.com/image/fget/cf/800/450/middle/s1.trrsf.com/atm/3/core/_img/terra-logo-white-bg-v3.jpg",
          publishedAt: "2020-05-29T23:58:13Z"
        },
        nlu: {
          sentiment: {
            document: {
              score: -0.735565,
              label: "negative"
            }
          },
          keywords: [
            {
              text: "Secretaria de Administração Penitenciária",
              sentiment: {
                score: 0,
                label: "neutral"
              },
              relevance: 0.825666,
              count: 1
            },
            {
              text: "total de servidores",
              sentiment: {
                score: 0,
                label: "neutral"
              },
              relevance: 0.656973,
              count: 1
            }
          ]
        }
      }
			const city = "Sorocaba"
			
			const date = new Date(res.news.publishedAt) // formated_Date - SDK returned date
			const formatedDate = `${date.getDate()}, ${date.getMonth() +1 }, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return (
			<Card className={classes.root} >
					<CardContent className={classes.content}>
						<Typography className={classes.title} component="h3" color="textSecondary" gutterBottom>
							Noticia de maior destaque
						</Typography>
						<Typography variant="h2" component="h2">
							<a className={classes.details} display="inline" href={res.url} className="cityLink" target="_blank">{city}</a>
							<p className={classes.datetime}>{res.news.author}  {formatedDate}</p>
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{res.nlu.keywords.map((word, _in, _arr)=>{
									if (_arr.length - 1 === _in) {
									return <p className={classes.bullWord}>{word.text}</p>;
								} else {
									return <><p className={classes.bullWord}>{word.text}</p> <span className={classes.bullet}>•</span> </>
								}
							})}
						</Typography>
						<Typography variant="h4" component="h4">
								{res.news.title}
						</Typography>
					</CardContent>
				<CardMedia
					className={classes.cover}
					image={res.news.urlToImage}
					title="New image"
				/>
			</Card>
    )
}
