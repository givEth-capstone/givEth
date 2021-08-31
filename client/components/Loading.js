import React, {useEffect, useState} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
// import LinearProgress from '@material-ui/core/LinearProgress'

export default function Loading(){
    const [progress, setProgress] = React.useState(null);
    // const [bufferProgress, setBufferProgress] = React.useState(null)

    //basically there are two loading things here. Currently loads spinner
    //Feel free to comment out either if you prefer the other
    return (
        <div style={{'paddingTop': '50px'}}>
             <CircularProgress />
            {/* <LinearProgress 
            variant='buffer'
            value={progress}
            valueBuffer={bufferProgress}
            /> */}
        </div>
    );
}

