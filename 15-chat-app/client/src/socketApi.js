import io from 'socket.io-client'

let socket;

export const init = () => {
    console.log("Connecting...")

    // Socket bağlantısının nerede olduğunu yazıyoruz. Bizim backend bağlantısı şuan açık ve 3000 portunda çalışıyor. npm start komutu ise şuanda 3001 portunda.
    socket = io("http://localhost:3000", {
        transports: ["websocket"],
    });

    socket.on("connect", () => console.log("Connected"))
}

export const sendMessage = (message) => {
    if (socket) socket.emit("new-message", message)
}

export const subscribeChat = (cb) => {
	if (!socket) return;

    // Socket on ile bağlantı açık ise yap diyoruz. İçindeki parametre db ye gönderdipimiz parametreler
    socket.on("receive-message", (message) => {
        console.log("Yeni mesaj var!", message)
        cb(message)
    })
}

export const subscribeInıtialMessages = (cb) => {
    if (!socket) return;

    socket.on("message-list", (messages) => {
        console.log("Initial", messages)
        cb(messages)
    })
}