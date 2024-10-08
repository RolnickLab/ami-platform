import { Button } from 'design-system/components/button/button'
import { STRING, translate } from 'utils/language'
import { useFilters } from 'utils/useFilters'
import styles from './empty-state.module.scss'

export const EmptyState = () => {
  const { filters, isActive: filtersActive, clearFilter } = useFilters()

  return (
    <div className={styles.wrapper}>
      <span>
        {translate(
          filtersActive
            ? STRING.MESSAGE_NO_RESULTS_FOR_FILTERING
            : STRING.MESSAGE_NO_RESULTS
        )}
      </span>
      {filtersActive && (
        <Button
          label={translate(STRING.CLEAR_FILTERS)}
          onClick={() => filters.map((filter) => clearFilter(filter.field))}
        />
      )}
    </div>
  )
}
