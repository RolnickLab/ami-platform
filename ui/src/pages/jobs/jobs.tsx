import { FetchInfo } from 'components/fetch-info/fetch-info'
import { useJobDetails } from 'data-services/hooks/jobs/useJobDetails'
import { useJobs } from 'data-services/hooks/jobs/useJobs'
import * as Dialog from 'design-system/components/dialog/dialog'
import { PaginationBar } from 'design-system/components/pagination/pagination-bar'
import { Table } from 'design-system/components/table/table/table'
import { Error } from 'pages/error/error'
import { JobDetails } from 'pages/job-details/job-details'
import { useNavigate, useParams } from 'react-router-dom'
import { getRoute } from 'utils/getRoute'
import { STRING, translate } from 'utils/language'
import { usePagination } from 'utils/usePagination'
import { columns } from './jobs-columns'
import styles from './jobs.module.scss'

export const Jobs = () => {
  const { id } = useParams()
  const { pagination, setPrevPage, setNextPage } = usePagination()
  const { jobs, total, isLoading, isFetching, error } = useJobs({ pagination })

  if (!isLoading && error) {
    return <Error />
  }

  return (
    <>
      {isFetching && (
        <div className={styles.fetchInfoWrapper}>
          <FetchInfo isLoading={isLoading} />
        </div>
      )}
      <Table items={jobs} isLoading={isLoading} columns={columns} />
      {!isLoading && id ? <JobDetailsDialog id={id} /> : null}
      {jobs?.length ? (
        <PaginationBar
          page={pagination.page}
          perPage={pagination.perPage}
          total={total}
          onPrevClick={setPrevPage}
          onNextClick={setNextPage}
        />
      ) : null}
    </>
  )
}

const JobDetailsDialog = ({ id }: { id: string }) => {
  const navigate = useNavigate()
  const { job, isLoading, isFetching } = useJobDetails(id)

  return (
    <Dialog.Root
      open={!!id}
      onOpenChange={() =>
        navigate(getRoute({ collection: 'jobs', keepSearchParams: true }))
      }
    >
      <Dialog.Content
        ariaCloselabel={translate(STRING.CLOSE)}
        isLoading={isLoading}
      >
        {job ? (
          <JobDetails job={job} title="Job details" isFetching={isFetching} />
        ) : null}
      </Dialog.Content>
    </Dialog.Root>
  )
}
