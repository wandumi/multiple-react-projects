import React from 'react'
import { Button } from '@material-ui/core'
import { Person } from '@material-ui/icons'

export default function Birthday() {
  return (
    <div style={{ margin: 100 }}>
      <Button
        variant='contained'
        color='secondary'
        size='small'
        startIcon={<Person />}
      >
        Wandumi
      </Button>
    </div>
  )
}
