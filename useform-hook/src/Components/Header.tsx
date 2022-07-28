import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  haeder: {
    // margin: theme.spacing(9,8,8,6),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 58,
    padding: '0 30px',
  }
}))

const Header = (props: any) => {
 const styles = useStyles()

  return (
   <Typography variant="h5" className={styles.haeder}>
      React useForm Hook Challenge
   </Typography> 
  )
}

export default Header