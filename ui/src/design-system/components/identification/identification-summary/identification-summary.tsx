import { ReactNode } from 'react'
import { STRING, translate } from 'utils/language'
import { Icon, IconTheme, IconType } from '../../icon/icon'
import styles from './identification-summary.module.scss'

interface IdentificationSummaryProps {
  children: ReactNode
  user?: {
    name: string
    image?: string
  }
}

export const IdentificationSummary = ({
  children,
  user,
}: IdentificationSummaryProps) => (
  <div>
    <div className={styles.user}>
      {user ? (
        <div className={styles.profileImage}>
          {user.image ? (
            <img src={user.image} alt="" />
          ) : (
            <Icon
              type={IconType.Photograph}
              theme={IconTheme.Primary}
              size={16}
            />
          )}
        </div>
      ) : (
        <Icon type={IconType.BatchId} theme={IconTheme.Primary} size={16} />
      )}
      <span className={styles.username}>
        {user?.name ?? translate(STRING.MACHINE_SUGGESTION)}
      </span>
    </div>
    {children}
  </div>
)
