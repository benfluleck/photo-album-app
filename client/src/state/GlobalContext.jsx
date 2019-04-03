import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import api from '<api>/api'

export const UsersContext = React.createContext()
const GlobalContext = (props) => {
  const [users, getUsers] = useState([])

  useEffect(
    () => {
      api
        .getAllUsers()
        .then(response => getUsers(response.data))
        .catch(err => console.log(err))
    },
    [users.length]
  )

  return (
    <UsersContext.Provider value={users}>
      {props.children}
    </UsersContext.Provider>
  )
}

GlobalContext.propTypes = {
  children: PropTypes.node.isRequired
}

export default GlobalContext
