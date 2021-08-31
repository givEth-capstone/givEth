import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//basically there are two loading things here. Currently loads spinner
//Feel free to comment out either if you prefer the other

export default function Loading(){
    const [progress, setProgress] = React.useState(null);
    // const [bufferProgress, setBufferProgress] = React.useState(null)

    return (
        // <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{'paddingTop': '260px'}} align='center'>
             <CircularProgress size={50}/>
            {/* <LinearProgress 
            variant='buffer'
            value={progress}
            valueBuffer={bufferProgress}
            /> */}
        </div>
    );
}



// NOTES
/* 

this spinner here has a % in the middle for how much loading progress is 
might be fun for the donate feature

function CircularProgressWithLabel(props) {
  return (
  <div style={{'paddingTop': '260px'}} align='center'>

    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
    </div>
  );
}

CircularProgressWithLabel.propTypes = {
 
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * 
   * 
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

*/