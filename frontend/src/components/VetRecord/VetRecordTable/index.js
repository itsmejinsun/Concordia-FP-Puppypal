import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    // useFilters,
    usePagination,
} from 'react-table';

import { getColumn } from './vetRecordColumn';
import './vetRecordTable.css';
import VetRecordSearch from './VetRecordSearch';
// import VetRecordFilter from './VetRecordFilter';

const VetRecordTable = ({
    vetRecordData,
    isVetRecordEditOpen,
    setIsVetRecordEditOpen,
    setSelectedVetRecord,
}) => {
    const handleMoreOpen = (ev, id) => {
        setSelectedVetRecord(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsVetRecordEditOpen(true);
    };

    const columns = useMemo(
        () => getColumn(handleMoreOpen),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    // const data = vetRecordData;

    const data = useMemo(
        () => vetRecordData,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [vetRecordData]
    );

    // const defaultColumn = useMemo(() => {
    //     return { Filter: VetRecordFilter };
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
            initialState: {
                sortBy: [
                    {
                        id: 'date',
                        desc: true,
                    },
                ],
            },
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
            <VetRecordSearch
                filter={globalFilter}
                setFilter={setGlobalFilter}
            />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup, idx) => (
                        <tr {...headerGroup.getHeaderGroupProps} key={idx}>
                            {headerGroup.headers.map((column, i) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                    key={i}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <FontAwesomeIcon
                                                    icon={faSortDown}
                                                    style={{
                                                        color: 'grey',
                                                        marginLeft: '0.25rem',
                                                    }}
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    icon={faSortUp}
                                                    style={{
                                                        color: 'grey',
                                                        marginLeft: '0.25rem',
                                                    }}
                                                />
                                            )
                                        ) : (
                                            ''
                                        )}
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
                    {page.map((row, idx) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={idx}>
                                {row.cells.map((cell, i) => {
                                    return (
                                        <td {...cell.getCellProps()} key={i}>
                                            {cell.render('Cell', {
                                                id: cell.row.original._id,
                                            })}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
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
                    />{' '}
                    of {pageOptions.length}
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

export default VetRecordTable;
