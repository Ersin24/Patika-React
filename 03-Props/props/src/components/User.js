/*PROPS YÖNTEMİ SAF HALİ
// function User(props){
//     return(
//         <>
//             <div>User Componenti</div>
//             <p>
//                 {(props.age >= 18 && props.isLoggedIn) ? `Giriş Başarılı Sayın ${props.name} ${props.surName}`  : `Tekrar Deneyin`}
//             </p>
//         </>
//     )
// }
*/

//PROPS YÖNTEMİ DİREKT VERİ ÇEKME

function User({ name, surName, age, isLoggedIn, friends, schools, address }) {

    if (!isLoggedIn) {
        return <div>Lütfen Giriş Yapınız!</div>
    }

    return (
        <>
            <div>User Componenti</div>
            <p>
                {(age >= 18 && isLoggedIn) ? `Giriş Başarılı Sayın ${name} ${surName} - (${age})` : `Tekrar Deneyin`}
            </p>

            {/* Address objesini çektik */}
            <br />
            {address.title} - {address.zip}
            <br />
            <br />

            { //Burada Props olarak döngü çektik ve key propertyi unutmadık. Sadece dizi olarak bunu kullanabiliriz.
                friends && friends.map((friends, index) => { return <div key={index}>{friends}</div> }
                )
            }
            <br />

            { //
                schools.map((school) => {
                    const no = school.no;
                    return <div key={school.id}>{school.name} - ({no}) </div>
                }
                )
            }

        </>
    )
}

export default User;