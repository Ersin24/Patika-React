//Burada amacımız başka bir componentte çalışan bir propu çalışıp çalışmayacağına baktık.


import { useTheme } from '../context/ThemeContext'

function Header() {

    const { theme, setTheme } = useTheme()


    return (
        <div>
            Header Theme: {theme}
            <br />
            <br />
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> Header Change </button>
        </div>
    )
}

export default Header