export const getColumn = (onClickFunc) => {
    const VACCINE_COLUMN = [
        {
            Header: 'Date',
            accessor: 'date',
        },
        {
            Header: 'Category',
            accessor: 'category',
        },
        {
            Header: 'Name',
            accessor: 'name',
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

    return VACCINE_COLUMN;
};
