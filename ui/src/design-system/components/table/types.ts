export enum CellTheme {
  Default = 'default',
  Primary = 'primary',
}

export enum TextAlign {
  Left = 'left',
  Right = 'right',
}

export enum OrderBy {
  Ascending = 'asc',
  Descending = 'desc',
}

export interface TableColumn<T> {
  id: string
  field?: string
  name: string
  sortable?: boolean
  textAlign?: TextAlign
  renderCell: (item: T) => JSX.Element
}

export interface TableSortSettings {
  columnId: string
  orderBy: OrderBy
}
