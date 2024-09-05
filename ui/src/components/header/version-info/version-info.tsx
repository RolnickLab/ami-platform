import { Tooltip } from 'design-system/components/tooltip/tooltip'
import { useMemo } from 'react'
import styles from './version-info.module.scss'

const COPY = {
  beta: {
    label: 'Beta',
    info: 'All data is considered test data and may be changed or deleted at any time. Use with caution.',
    version: `Build ${__COMMIT_HASH__}`,
  },
  demo: {
    label: 'Demo',
    info: 'This is a demo environment.', // TODO: Update this
    version: undefined,
  },
}

export const VersionInfo = () => {
  const copy = useMemo(() => {
    // TODO: We can check some different env here if available
    switch (import.meta.env.VITE_API_PROXY_TARGET) {
      case 'https://api.demo.insectai.org':
        return COPY.demo
      default:
        return COPY.beta
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <Tooltip content={copy.info}>
        <div className={styles.badge}>{copy.label}</div>
      </Tooltip>
      {copy.version && <span className={styles.version}>{copy.version}</span>}
    </div>
  )
}
