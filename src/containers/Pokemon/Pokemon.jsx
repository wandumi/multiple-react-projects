import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import { IMAGE_API_URL, POKERMON_API_URL } from '../../config'
import PokemonCard from '../../components/pokemon/pokemonCard'

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    textAlign: 'center',
    padding: '70px 20px 50px 20px',
    backgroundColor: 'rgb(68 68 68)',
  },
}))

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null)
  useEffect(() => {
    // calling the api
    axios.get(POKERMON_API_URL + '?limit=100').then((response) => {
      if (response.status >= 200 && response.status <= 300) {
        const { results } = response.data
        let newPokermonData = []

        results.forEach((pokemon, index) => {
          index++
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + '.png',
            name: pokemon.name,
          }
          newPokermonData.push(pokemonObject)
        })
        setPokemonData(newPokermonData)
      }
    })
  }, [])
  const classes = useStyles()
  return (
    <Box>
      {pokemonData ? (
        <Grid className={classes.pokedexContainer} container spacing={2}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                image={pokemon.url}
                key={pokemon.id}
              />
            )
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  )
}
