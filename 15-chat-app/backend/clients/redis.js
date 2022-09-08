// Ortam değişkenleri tanımlıyoruz 
//Redisi mesajları kaydetmek ve sonrasında geçmişten geri çekmek için kullanıyoruz. 
// https://www.youtube.com/watch?v=_nFwPTHOMIY redis kurulumu

const redis = require("redis");


const getClient = () => {
    return redis.createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASS,
        db: 1,
    });
};

module.exports.getClient = getClient;
