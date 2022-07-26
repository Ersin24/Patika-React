import getData from "./getData.js";

try {

    (async () => {
        return console.log(getData(1))
    })();

} catch (error) {
    console.log(error)
}
