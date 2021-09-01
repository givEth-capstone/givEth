import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    padding: theme.spacing(3),
    // marginTop: theme.spacing(3),
},
  titleContainer: {
    position: 'relative',
    height:400,
    backgroundColor:theme.palette.grey[800],
    color: theme.palette.common.white,
    padding: theme.spacing(5),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: 100,
    },
  card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 12,
      padding: 'auto',
      minHeight: 400
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
  }));
  
  export default useStyles;