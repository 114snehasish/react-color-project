import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
    root: {
        width: "20%",
        height: "25%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        margin: "0 auto -4px",
    }
}

function DraggableColorBox({ color, classes }) {
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            {color}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox)
