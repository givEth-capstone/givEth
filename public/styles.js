import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    justifyContent: 'center',
    alignItems:'center',
    flexWrap: 'wrap',
},
  titleContainer: {
    position: 'relative',
    height:750,
    backgroundColor: 'white',
    color: theme.palette.common.white,
    padding: theme.spacing(5),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: 'center',
    alignItems:'center',
    // opacity: '50%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    // margin: 'auto',
    marginTop: 40,
     justifyContent: 'left',
    // alignItems:'center-left',
    padding: 2,
    zIndex: 3,
    },
  card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 12,
      padding: '30px',
      height: 400,
  },
  steps: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 12,
    padding: 'auto',
    minHeight: 200
},
    action: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    media: {
      maxHeight: 400,
    },
    message: {
      alignSelf: 'center',
      padding: 30
    },
    cardContentHeight:{
      height: 120
    },
    featuredImg: {
      maxHeight: 350,
    },
    overflow: {
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 4,
      WebkitBoxOrient: "vertical"
    }
  }
  ));
  
  export default useStyles;