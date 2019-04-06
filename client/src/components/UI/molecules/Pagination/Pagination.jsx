import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PaginationItem from '<atoms>/PaginationItem/PaginationItem'
import PaginationInput from '<atoms>/PaginationInput/PaginationInput'

function Pagination ({ limit, onPageChange, startPosition }) {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(
    () => {
      setCurrentPage(currentPage)
    }, [currentPage]
  )

  const updatePage = event =>
    setCurrentPage({
      currentPage: event.target.value
    })

  return (
    <Pagination.Container>
      <PaginationItem
        onClick={onPreviousClick}
        isDisabled={startPosition < limit}
      >
        « Prev
      </PaginationItem>
      <PaginationInput
        onChange={e => updatePage(e)}
        value={currentPage} />
      <PaginationItem
        onClick={onNextClick}
        isDisabled={!checkEmpty}
      >
        Next »
      </PaginationItem>
    </Pagination.Container>
  )

  function onPreviousClick () {
    if (currentPage <= 1) return
    setCurrentPage(currentPage - 1)
    const startPage = getPrevPage()
    onPageChange(startPage, startPosition)
  }

  function checkEmpty () {
    const startPage = getNextStartPage()
    if (!(onPageChange(startPage, limit)).length) {
      return false
    }
  }

  function onNextClick () {
    setCurrentPage(currentPage + 1)
    const startPage = getNextStartPage()
    onPageChange(startPage, startPosition)
  }

  function getNextStartPage () {
    startPosition = startPosition + limit
    return Math.floor(startPosition / limit) + 1
  }

  function getPrevPage () {
    startPosition = startPosition - limit
    return Math.floor(startPosition / limit) + 1
  }
}

Pagination.Container = styled.div`
  margin: 20px 0;
  user-select: none;
`

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  limit: PropTypes.number,
  startPosition: PropTypes.number,
  currentPage: PropTypes.number,
  page: PropTypes.number
}

Pagination.defaultProps = {
  onPageChange: () => {}
}

export default Pagination
