import { useEffect, useState } from 'react'

import api from '<api>/api'

const useDataFromApi = (path, params) => {
  const [data, setData] = useState([])
  //   const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  useEffect(
    () => {
      const request = async () => {
        // setLoading(true)
        try {
          const response = await api.get(`/${path}`, {
            params
          })

          setData(response.data)
        } catch (err) {
          setError(err.message)
        }

        // setLoading(false)
      }

      request()
    },
    [params._start, params._limit]
  )

  return {
    data,
    error
  }
}

export default useDataFromApi
