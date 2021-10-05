export const getColumn = (onClickFunc) => {
    const VETRECORD_COLUMN = [
        {
            Header: 'Date',
            accessor: 'date',
        },
        {
            Header: 'Reason',
            accessor: 'reason',
        },
        {
            Header: 'Weight(kg)',
            accessor: 'weight',
        },
        {
            Header: 'Meds',
            accessor: 'prescription',
            Cell: (props) => {
                return props.value ? '✅' : null;
            },
        },
        {
            Header: 'Next',
            accessor: 'nextVisitDate',
        },
        {
            Header: 'More',
            Cell: (props) => {
                return (
                    <button
                        key={props.id}
                        onClick={(ev) => onClickFunc(ev, props.id)}
                        style={{
                            border: 'solid 1px grey',
                            borderRadius: '5px',
                            fontFamily: 'inherit',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                        }}
                    >
                        Open
                    </button>
                );
            },
            // accessor: 'file',
            // disableFilters: true,
        },
    ];

    return VETRECORD_COLUMN;
};
