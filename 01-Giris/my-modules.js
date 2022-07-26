//Tanımlamalar

const Hello = (name) => {
    return `Merhaba ${name}`;
}
const topla = (a, b) => {
    return a + b
};
const cikar = (a, b) => {
    return a - b
};
const carp = (a, b) => {
    return a * b
};
const bol = (a, b) => {
    return a / b
};

export const cars = ["Audi", "BMW", "Mercedes"];
export const car = {
    Auidi: "Almanya",
    Mercedes: "Almanya",
    Renault: "Fransa",
}
export const text = "Burası metin alanı"

//Export
export default Hello;
export { topla, cikar, carp, bol };
