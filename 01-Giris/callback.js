import axios from "axios";
import fetch from "node-fetch";

//********************//Genel Fetch Yapısı
    fetch("https://jsonplaceholder.typicode.com/users") //*******
.then((data) => data.json()) //json parse işlemi yapıyoruz burada js için
        .then((data) => { console.log(data[0].name) });

//*****************// Herhangi bir sıra olmadan fetch yapısı*****
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((user) => console.log("Users 1 Yüklendi", user[0]))

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json())
    .then((post1) => console.log("Post 1 Yüklendi", post1))

fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((data) => data.json())
    .then((post2) => console.log("Post2 Yüklendi", post2))


    //***************//Sıraya bağlı iç içe fetch yapısı******
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((user) => {
            console.log("Users 1 Yüklendi", user[0]);
            fetch("https://jsonplaceholder.typicode.com/posts/1")
                .then((data) => data.json())
                .then((post1) => {
                    console.log("Post 1 Yüklendi", post1);
                    fetch("https://jsonplaceholder.typicode.com/posts/2")
                        .then((data) => data.json())
                        .then((post2) => console.log("Post2 Yüklendi", post2))
                })
        })

//***ASYNC AWAİT İLE AYRI FETCH YAPILARINDA BİLE SIRAYA BAĞLI KALMA

async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log("Users0 Yüklendi", users[0]);
    console.log("Post1 Yüklendi", post1);
    console.log("Post2 Yüklendi", post2);
};

getData();

// İsimsiz olarak anonim fonksiyon çağırmak istersek:
(async () => {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log("Users0 Yüklendi", users[0]);
    console.log("Post1 Yüklendi", post1);
    console.log("Post2 Yüklendi", post2);
})();

//****** Fetch Yerine Axios Kullanıyoruz çünkü daha avantajlı.parse işlemi yapmıyoruz:

import axios from "axios";

(async () => {
    const { data: Users } = await axios("https://jsonplaceholder.typicode.com/users");

    const { data: Post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");

    const { data: Post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log("Users Yüklendi", Users[0]);
    console.log("Post1 Yüklendi", Post1);
    console.log("Post2 Yüklendi", Post2);
})();

//Promise Resolve Reject Kavramları.

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
        reject("Users hata meydana geldi!");
    })
}

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);

        resolve(data);
        reject("Postta bir hata meydana geldi!")
    })
}

(async () => {
    try {
        const users = await getUsers();
        const post = await getPost(2);

        console.log(users);
        console.log(post)
    } catch (error) {
        console.log(error)
    }
})();

//Bütün promiselerı tek parametrede gösterebiliyoruz yine async olarak
Promise.all([getUsers(), getPost(1)])
    .then(console.log)
    .catch(console.log);