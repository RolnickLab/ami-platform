import { ComboBox } from 'design-system/components/combo-box/combo-box'
import { MarkerPosition } from 'design-system/map/types'
import { useMemo, useState } from 'react'
import { STRING, translate } from 'utils/language'
import { useGeoSearch } from './useGeoSearch'

export const GeoSearch = ({
  onPositionChange,
}: {
  onPositionChange: (position: MarkerPosition) => void
}) => {
  const [searchString, setSearchString] = useState('')
  const { data } = useGeoSearch(searchString)

  const items = useMemo(() => {
    if (!data?.length) {
      return []
    }
    return data.map((result) => ({
      id: result.osmId,
      label: result.displayName,
    }))
  }, [data])

  return (
    <ComboBox
      emptyLabel={translate(STRING.MESSAGE_NO_RESULTS)}
      items={items}
      label={translate(STRING.SEARCH_MAP)}
      searchString={searchString}
      onItemSelect={(id) => {
        const item = data?.find((i) => i.osmId === id)
        if (item) {
          setSearchString(item.displayName)
          onPositionChange(item.position)
        }
      }}
      setSearchString={setSearchString}
    />
  )
}
