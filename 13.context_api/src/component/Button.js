//Contexti kullanmak için useContext hookunu kullanacağız.
import { useTheme } from '../context/ThemeContext'


function Button() {

    const { theme, setTheme } = useTheme()

    return (
        <div>
            {/* Gelen veriyi theme ile çekip setTheme ile atama yapıyoruz */}
            {console.log("Gelen veri : ", theme)}
            Active class: {theme} <br />
            <br />
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Change Theme</button>
        </div>
    )
}

export default Button