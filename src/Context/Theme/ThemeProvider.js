import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

function ThemeProvider(props) {
  const [theme,setTheme]=useState(localStorage.getItem('theme')||'dark')
  return (
    <ThemeContext.Provider value={{
        theme:theme,
        setTheme:setTheme
        }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider