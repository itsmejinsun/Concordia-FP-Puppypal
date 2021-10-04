import React, { useMemo } from 'react';
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    // useFilters,
    usePagination,
} from 'react-table';

import { VACCINE_COLUMN } from './vaccineColumn';
import './vaccineTable.css';
import VaccineSearch from './VaccineSearch';
// import VaccineFilter from './VaccineFilter';

const VaccineTable = ({ vaccineData }) => {
    const columns = useMemo(() => VACCINE_COLUMN, []);
    const data = useMemo(() => vaccineData, []);
    // const defaultColumn = useMemo(() => {
    //     return { Filter: VaccineFilter };
    // }, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            // defaultColumn,
        },
        // useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter } = state;
    const { pageIndex } = state;

    return (
        <>
            <VaccineSearch filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                    {/* <div>
                                        {column.canFilter
                                            ? column.render('Filter')
                                            : null}
                                    </div> */}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    Previous
                </button>
                <span>
                    page{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(ev) => {
                            const pageNumber = ev.target.value
                                ? Number(ev.target.value) - 1
                                : 0;
                            gotoPage(pageNumber);
                        }}
                        style={{ width: '50px' }}
                    />
                    <strong>of {pageOptions.length}</strong>{' '}
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {'>>'}
                </button>
            </div>
        </>
    );
};

export default VaccineTable;
