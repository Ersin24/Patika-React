import io from 'socket.io-client'

let socket;

export const init = () => {

    console.log("Sunucuya bağlanılıyor...")

    socket = io("http://localhost:3001", {
        transports: ["websocket"],
    })

    socket.on("connect", () => {
        console.log("Sunucuya başarıyla bağlandı")
    })
}

export const send = (color)=> {
    //Clienttaysak database'e ya da diğer türlü olarak veri akış veririşini sağlıyor emit komutu
    socket.emit("newColor", color)
}

//Kanala abone olma
export const subscribe = ( cb ) => {
    //Öncelikle databasedeki kanalı dinlliyoruz socket.on ile. Receive bir kanal ve ordaki colora ulaşıyoruz.
    socket.on("receive", (color)=> {
        console.log(color)
        cb(color)
    })
}