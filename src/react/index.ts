// Side effects
import './setBatchUpdatesFn'
import './setLogger'

export { QueryClientProvider, useQueryClient } from './QueryClientProvider'
export {
  QueryErrorResetBoundary,
  useQueryErrorResetBoundary,
} from './QueryErrorResetBoundary'
export { useIsFetching } from './useIsFetching'
export { useMutation, useBaseMutation } from './useMutation'
export { useQuery } from './useQuery'
export { useQueries } from './useQueries'
export { useInfiniteQuery } from './useInfiniteQuery'
export { useBaseQuery } from './useBaseQuery'

// Types
export * from './types'
export type { QueryClientProviderProps } from './QueryClientProvider'
export type { QueryErrorResetBoundaryProps } from './QueryErrorResetBoundary'
