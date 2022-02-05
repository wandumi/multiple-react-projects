import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { POKERMON_API_URL } from '../../config'
import { useParams } from 'react-router-dom'

function PokemonDetails() {
  const params = useParams()
  console.log(params.id)

  useEffect(() => {
    axios.get(POKERMON_API_URL + '/' + params.id).then((response) => {
      if (response.status >= 200 && response.status <= 300) {
        console.log(response.data)
      }
    })
  }, [])

  return (
    <div style={{ marginTop: 100 }}>
      <p>Pokeman id = {params.id}</p>
    </div>
  )
}

export default PokemonDetails
