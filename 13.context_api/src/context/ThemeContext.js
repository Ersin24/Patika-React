//react altından create context çektik. Bunu kullanmak için useContext yapısını kullanacağız.
//useState yapısını thema light mı dark mı değerini tutan bir değişken için oluşturduk.
//useEffect yapısını ise theme her değiştiğinde localStorage ' e atıp sayfa yenilendiğinde veriyi ordan çekmek için kullandık. 

//import
import { createContext, useState, useEffect, useContext } from 'react'

//Context oluşturduk
const ThemeContext = createContext();

//Provider sarmalamak demek. ThemeProviderı Theme Context'ten çekeceğiz.
//İçine children geliyor. Bütün componentleri bunun sayesinde çekeceğiz.
export const ThemeProvider = ({ children }) => {

    // Eğer localstorage'te bir değer varsa onu getir yoksa light yap diyoruz
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    //Theme her değiştiğnde theme adında bir değeri oluştur diyoruz
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    //Prop tarzında değerleri tutmak için object halinde veriyi obje halinde saklamamız gerekiyor.
    const values = {
        theme,
        setTheme
    }

    //Return etmeyi unutma!!!!
    return (<ThemeContext.Provider value={values}>
        {/* Buradaki children sonradan içine eklenecek bütün componentleri temsil ediyor */}
        {children}
    </ThemeContext.Provider>)
}

export const useTheme = () => useContext(ThemeContext)


