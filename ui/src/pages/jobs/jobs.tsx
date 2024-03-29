import { FetchInfo } from 'components/fetch-info/fetch-info'
import { useJobDetails } from 'data-services/hooks/jobs/useJobDetails'
import { useJobs } from 'data-services/hooks/jobs/useJobs'
import * as Dialog from 'design-system/components/dialog/dialog'
import { PaginationBar } from 'design-system/components/pagination-bar/pagination-bar'
import { Table } from 'design-system/components/table/table/table'
import { TableSortSettings } from 'design-system/components/table/types'
import _ from 'lodash'
import { Error } from 'pages/error/error'
import { JobDetails } from 'pages/job-details/job-details'
import { NewJobDialog } from 'pages/job-details/new-job-dialog'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BreadcrumbContext } from 'utils/breadcrumbContext'
import { APP_ROUTES } from 'utils/constants'
import { getAppRoute } from 'utils/getAppRoute'
import { STRING, translate } from 'utils/language'
import { usePagination } from 'utils/usePagination'
import { columns } from './jobs-columns'
import styles from './jobs.module.scss'
import { UserPermission } from 'utils/user/types'

export const Jobs = () => {
  const { projectId, id } = useParams()
  const { pagination, setPage } = usePagination()
  const [sort, setSort] = useState<TableSortSettings>()
  const { jobs, userPermissions, total, isLoading, isFetching, error } =
    useJobs({
      projectId,
      pagination,
      sort,
    })
  const canCreate = userPermissions?.includes(UserPermission.Create)

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
      <Table
        items={jobs}
        isLoading={isLoading}
        columns={columns(projectId as string)}
        sortable
        sortSettings={sort}
        onSortSettingsChange={setSort}
      />
      {jobs?.length ? (
        <PaginationBar
          pagination={pagination}
          total={total}
          setPage={setPage}
        />
      ) : null}
      {!isLoading && id ? (
        <JobDetailsDialog id={id} />
      ) : canCreate ? (
        <NewJobDialog />
      ) : null}
    </>
  )
}

const JobDetailsDialog = ({ id }: { id: string }) => {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const { setDetailBreadcrumb } = useContext(BreadcrumbContext)
  const { job, isLoading, isFetching } = useJobDetails(id)

  useEffect(() => {
    setDetailBreadcrumb(job ? { title: job.name } : undefined)

    return () => {
      setDetailBreadcrumb(undefined)
    }
  }, [job])

  const closeDialog = () =>
    navigate(
      getAppRoute({
        to: APP_ROUTES.JOBS({ projectId: projectId as string }),
        keepSearchParams: true,
      })
    )

  return (
    <Dialog.Root open={!!id} onOpenChange={closeDialog}>
      <Dialog.Content
        ariaCloselabel={translate(STRING.CLOSE)}
        isLoading={isLoading}
      >
        {job ? (
          <JobDetails
            job={job}
            title={translate(STRING.ENTITY_DETAILS, {
              type: _.capitalize(translate(STRING.ENTITY_TYPE_JOB)),
            })}
            isFetching={isFetching}
            onDelete={closeDialog}
          />
        ) : null}
      </Dialog.Content>
    </Dialog.Root>
  )
}
