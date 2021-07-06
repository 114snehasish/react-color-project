export const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        border: '1px solid black',
        position: 'relative',
        overflow: 'hidden',
        padding: '.5rem',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative',
    },
    emoji: {
        margin: '0.5rem',
        fontSize: '1.5rem',
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-4px',
    },
};