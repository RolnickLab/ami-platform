import { FetchInfo } from 'components/fetch-info/fetch-info'
import { useQueues } from 'data-services/hooks/useQueues'
import { Table } from 'design-system/components/table/table/table'
import { Error } from 'pages/error/error'
import { columns } from './batch-id-columns'
import styles from './batch-id.module.scss'

export const BatchId = () => {
  const { queues, isLoading, isFetching, error } = useQueues()

  if (error) {
    return <Error />
  }

  return (
    <>
      {!isLoading && isFetching && (
        <div className={styles.fetchInfoWrapper}>
          <FetchInfo />
        </div>
      )}
      <Table items={queues} isLoading={isLoading} columns={columns} />
    </>
  )
}
