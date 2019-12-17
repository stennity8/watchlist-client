import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationExampleCompact = () => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={undefined}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
    onPageChange={(event, data) => console.log(data.activePage)}
  />
)

export default PaginationExampleCompact