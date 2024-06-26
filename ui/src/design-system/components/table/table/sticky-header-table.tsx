import { ReactNode, RefObject, useLayoutEffect, useRef } from 'react'
import { StickyTableHeader } from 'vh-sticky-table-header'
import styles from './table.module.scss'

/**
 * Help component to make it possible to combine sticky table header and horizontal scrolling.
 *
 * References:
 *   - The core issue: https://github.com/w3c/csswg-drafts/issues/865
 *   - Current solution: https://github.com/archfz/vh-sticky-table-header
 */

export const StickyHeaderTable = ({
  tableContainerRef, // For the main table to get information about scroll status
  children,
}: {
  tableContainerRef: RefObject<HTMLDivElement>
  children: ReactNode
}) => {
  const tableRef = useRef<HTMLTableElement>(null)
  const tableCloneRef = useRef<HTMLTableElement>(null)

  useLayoutEffect(() => {
    if (tableRef.current && tableCloneRef.current) {
      // Initialize the sticky header.
      const sticky = new StickyTableHeader(
        tableRef.current,
        tableCloneRef.current,
        { max: 96 }
      )

      // Destory the sticky header once the main table is unmounted.
      return () => sticky.destroy()
    }
  }, [tableRef.current && tableCloneRef.current])

  return (
    <>
      <div ref={tableContainerRef} className={styles.tableContainer}>
        <table ref={tableRef} className={styles.table}>
          {children}
        </table>
      </div>
      <div className={styles.tableContainer}>
        <table ref={tableCloneRef} className={styles.tableClone} />
      </div>
    </>
  )
}
