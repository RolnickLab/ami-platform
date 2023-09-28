import { QueryKey, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getAuthHeader } from 'data-services/utils'
import { useUser } from 'utils/user/userContext'

export const useAuthorizedQuery = <T>({
  onError,
  queryKey = [],
  refetchInterval,
  retry,
  staleTime,
  url,
}: {
  onError?: (error: unknown) => void
  queryKey?: QueryKey
  refetchInterval?: number
  retry?: number
  staleTime?: number
  url: string
}) => {
  const { user } = useUser()

  const { data, isLoading, isFetching, isSuccess, error } = useQuery({
    onError,
    queryKey,
    queryFn: () =>
      axios
        .get<T>(url, {
          headers: getAuthHeader(user),
        })
        .then((res) => res.data),
    refetchInterval,
    retry,
    staleTime,
  })

  return { data, isLoading, isFetching, isSuccess, error }
}
