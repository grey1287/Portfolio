import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  FloatingBtnConatiner: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    marginTop: '530px',
    marginLeft: '3vmin',
  },
  vl: {
    borderLeft: '1px solid #FF3E55',
    height: '300px',
    marginLeft: '1vmin'
  },
  icon: {
    marginBottom: '1vmin',
    '&:hover' :{
      color: '#FF3E55',
    },
  }
}));