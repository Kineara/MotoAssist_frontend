import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const existingUsers = () => {
  const usernames = ["Riley", "Ecco"]

  const userButtons = usernames.map((user) => {
    return <Button key={user}>{user}</Button>
  })

  return (
    <ButtonGroup size="large" aria-label="users">
      {userButtons}
    </ButtonGroup>
  )
}

export default existingUsers