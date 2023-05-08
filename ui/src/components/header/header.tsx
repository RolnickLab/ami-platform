import { Breadcrumbs } from 'components/breadcrumbs/breadcrumbs'
import { NavigationBar } from 'design-system/components/navigation/navigation-bar'
import { Settings } from 'pages/settings/settings'
import { useNavigate } from 'react-router-dom'
import { useNavItems } from 'utils/useNavItems'
import styles from './header.module.scss'

export const Header = () => {
  const navigate = useNavigate()
  const { navItems, activeNavItemId } = useNavItems()

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <Breadcrumbs navItems={navItems} activeNavItemId={activeNavItemId} />
        <Settings />
      </div>
      <NavigationBar
        items={navItems}
        activeItemId={activeNavItemId}
        onItemClick={(id) => {
          const item = navItems.find((i) => i.id === id)
          if (item) {
            navigate(item.path)
          }
        }}
      />
    </header>
  )
}