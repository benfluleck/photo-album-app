import React, { useContext } from 'react'

import OptionSelect from '<molecules>/OptionSelect/OptionSelect'
import PageTemplate from '<templates>/PageTemplate'
import Pagination from '<molecules>/Pagination/Pagination'
import { UsersContext } from '<state>/GlobalContext'
import useDataFromApi from '<state>/hooks/useDataFromApi'
import usePagination from '<state>/hooks/usePagination'
import { getUsers } from '<helpers>/utils'

function withPageTemplate (Component, pageRoute, pageTitle, fn = () => {}) {
  return function AlbumPage () {
    const allUsers = useContext(UsersContext)
    const users = getUsers(allUsers)

    const startPostion = 0
    const initLimit = 10
    const urlParams = new URLSearchParams(window.location.search)
    const currentPage = Number(urlParams.get('page')) || 1

    const {
      start,
      setStart,
      limit,
      setLimit
    } = usePagination(startPostion, initLimit)

    const { data } = useDataFromApi(
      pageRoute, {
        _start: start,
        _limit: limit
      }
    )

    const results = fn(data, users)
    return (
      <PageTemplate pageTitle={pageTitle}>
        <Component {...results}/>
        <OptionSelect
          handleOnChange={handleOnChangeLimit} initLimit={initLimit} />
        <Pagination
          limit={limit}
          onPageChange={handleOnPageChange}
          page={currentPage}
          startPosition={start}
        />
      </PageTemplate>)

    function handleOnPageChange (page, startPosition) {
      setStart(startPosition)
      pushStatePage(page)
    }

    function pushStatePage (page) {
      window.history.pushState(null, null, `?page=${page}`)
    }

    function handleOnChangeLimit (e) {
      setLimit(Number(e.target.value))
      setStart(0)
      pushStatePage(1)
    }
  }
}

export default withPageTemplate
