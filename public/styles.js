import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    // marginTop: theme.spacing(3),
},
  titleContainer: {
    position: 'relative',
    height:400,
    backgroundColor:theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
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
      margin: 'auto',
  },
    action: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    media: {
      maxHeight: 200,
    },
    message: {
      alignSelf: 'center',
      margin: 30
    },
  }));
  
  export default useStyles;