/* 
    Daha düzenli olması için container bloğunun içerisine context yapısını attık
*/


import Header from './Header'
import Button from './Button'

import { useTheme } from '../context/ThemeContext'
import Profile from './Profile'

function Container() {

  const { theme } = useTheme()
  return (
    <div className={`app ${theme === "dark" ? "dark" : "light"}`}>

      <Header />
      <hr />
      <Button />

      <br />

      <Profile />
    </div>
  )
}

export default Container