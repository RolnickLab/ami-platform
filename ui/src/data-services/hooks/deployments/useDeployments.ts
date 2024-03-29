import { API_ROUTES } from 'data-services/constants'
import { Deployment, ServerDeployment } from 'data-services/models/deployment'
import { FetchParams } from 'data-services/types'
import { getFetchUrl } from 'data-services/utils'
import { useMemo } from 'react'
import { UserPermission } from 'utils/user/types'
import { useAuthorizedQuery } from '../auth/useAuthorizedQuery'

const convertServerRecord = (record: ServerDeployment) => new Deployment(record)

export const useDeployments = (
  params?: FetchParams
): {
  deployments?: Deployment[]
  userPermissions?: UserPermission[]
  isLoading: boolean
  isFetching: boolean
  error?: unknown
} => {
  const fetchUrl = getFetchUrl({
    collection: API_ROUTES.DEPLOYMENTS,
    params,
  })

  const { data, isLoading, isFetching, error } = useAuthorizedQuery<{
    results: ServerDeployment[]
    user_permissions?: UserPermission[]
  }>({
    queryKey: [API_ROUTES.DEPLOYMENTS, params],
    url: fetchUrl,
  })

  const deployments = useMemo(
    () => data?.results.map(convertServerRecord),
    [data]
  )

  return {
    deployments,
    userPermissions: data?.user_permissions,
    isLoading,
    isFetching,
    error,
  }
}
