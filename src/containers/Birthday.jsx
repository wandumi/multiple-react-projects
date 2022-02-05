import React from 'react'
import { Button } from '@material-ui/core'
import { Person } from '@material-ui/icons'

export default function Birthday() {
  return (
    <div>
      <Button variant='contained' size='large' startIcon={<Person />}>
        Wandumi
      </Button>
    </div>
  )
}
