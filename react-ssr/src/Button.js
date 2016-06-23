import React from 'react'
import useSheet from 'react-jss'

const styles = {
  button: {
    color: 'green'
  }
}

function Button(props) {
  const {classes} = props.sheet
  return <button className={classes.button}>My Button</button>
}

export default useSheet(styles)(Button)
