import React from 'react'
import { Pagination } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchPopularTvShows } from '../../actions/tvShows'

const PaginationExampleCompact = (props) => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={undefined}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
    onPageChange={(event, data) => props.fetchPopularTvShows(data.activePage)}
  />
)

export default connect(null, { fetchPopularTvShows })(PaginationExampleCompact)