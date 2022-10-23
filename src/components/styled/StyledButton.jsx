import { Button } from '@mui/material'
import React from 'react'

const StyledButton = ({title, handleClick}) => {
  return (
    <Button data-testid="button-styled" onClick={handleClick}>
      {title}
    </Button>
  )
}

export default StyledButton