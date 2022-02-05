import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  rgbToHex,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  CardMedia: {
    margin: 'auto',
    width: 120,
    height: 120,
  },
  card: {
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(90, 90, 90)',
    },
  },
  cardContent: {
    textAlign: 'center',
  },

  Link: {
    textDecoration: 'none',
  },
}))
const PokemonCard = (props) => {
  const { pokemon, image } = props
  const { id, name } = pokemon

  const classes = useStyles()
  return (
    <Grid item xs={12} sm={2} key={id}>
      <Link to={'/pokemon/' + id} className={classes.Link}>
        <Card className={classes.card}>
          <CardMedia className={classes.CardMedia} image={image}></CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography>{name}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default PokemonCard
