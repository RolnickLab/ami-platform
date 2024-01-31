import { Tooltip } from 'design-system/components/tooltip/tooltip'
import styles from './beta-info.module.scss'

const COPY = {
  LABEL: 'Beta',
  INFO: 'More info about beta status goes here?',
  VERSION: import.meta.env.PACKAGE_VERSION, // Read version from package.json
}

export const BetaInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Tooltip content={COPY.INFO}>
        <div className={styles.badge}>{COPY.LABEL}</div>
      </Tooltip>
      <span className={styles.version}>Version {COPY.VERSION}</span>
    </div>
  )
}
