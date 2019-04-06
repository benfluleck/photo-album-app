import { useState } from 'react'

function usePagination (startPosition, initLimit) {
  const [start, setStart] = useState(startPosition)
  const [limit, setLimit] = useState(initLimit)

  return {
    start,
    setStart,
    limit,
    setLimit
  }
}

export default usePagination
