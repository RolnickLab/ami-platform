import * as Sentry from '@sentry/browser'
import { Button } from 'design-system/components/button/button'
import { Icon, IconTheme, IconType } from 'design-system/components/icon/icon'
import { Tooltip } from 'design-system/components/tooltip/tooltip'
import { ReactNode } from 'react'
import { ErrorBoundary as _ErrorBoundary } from 'react-error-boundary'
import { STRING, translate } from 'utils/language'
import styles from './error-boundary.module.scss'

const logErrorToService = (error: Error, errorInfo: any) => {
  const sentryEnabled = !!Sentry.getCurrentHub().getClient()

  if (!sentryEnabled) {
    return
  }

  Sentry.withScope((scope) => {
    scope.setExtras(errorInfo)
    Sentry.captureException(error)
  })
}

const FallbackComponent = ({
  error,
  resetErrorBoundary,
}: {
  error: { message: string }
  resetErrorBoundary: () => void
}) => (
  <div className={styles.wrapper}>
    <Tooltip content={error.message}>
      <div className={styles.iconWrapper}>
        <Icon type={IconType.Error} theme={IconTheme.Error} size={24} />
      </div>
    </Tooltip>
    <span>Something went wrong!</span>
    <Button label={translate(STRING.RETRY)} onClick={resetErrorBoundary} />
  </div>
)

export const ErrorBoundary = ({ children }: { children: ReactNode }) => (
  <_ErrorBoundary
    FallbackComponent={FallbackComponent}
    onError={logErrorToService}
  >
    {children}
  </_ErrorBoundary>
)
