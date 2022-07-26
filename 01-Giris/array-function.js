const users = [
    {
        name: "Mehmet",
        age: 20,
    },
    {
        name: "Mehmet",
        age: 22
    },
    {
        name: "Ahmet",
        age: 30,
    },
    {
        name: "Sevilay",
        age: 10
    }
]

//push Eleman ekle sonuna
users.push({ name: "Sezen", age: 25 }, { name: "Sultan", age: 12 });
console.log(users)

//map Dizi içerisinde dön
users.map((item) => console.log("Map Fonksiyon: <br>", item))

//find Koşula göre arama yapar ve ilk sonucu döndürür
const result = users.find((item) => {
    return item.name === "Mehmet" && item.age > 10
})

console.log("Find sonuç", result)

//filter Belli aramay göre filtreme yapıyor ve bütün sonuçları döndürüyor
const filtered = users.filter(({ name, age }) => {
    return name === "Mehmet" && age < 30
})
console.log("filter sonuç", filtered)

//some Koşul uyuyorsa true uymuyorsa false döner
const some = users.some((item) => item.age === 20)
console.log("Some sonuç:", some)

//every Bütün koşullar uyuyorsa true uymuyorsa false döner
const every = users.every((item) => item.age > 20)
console.log("Every sonuç", every)

//includes İçinde geçiyor mu geçmiyor mu? evetse true hayırsa false
const fruits = ["elma", "armut", "muz"]
const isIncludes = fruits.includes("elma")

console.log("includes elma var mı ? : ", isIncludes)