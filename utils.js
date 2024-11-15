const fs = require("fs");

const getPersonajes = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    return data.results;
};

const clearData = (data) => {
    return data.map((personaje) => {
        return {
            id: personaje.id,
            name: personaje.name,
            status: personaje.status,
            species: personaje.species,
        };
    });
};

const writeFile = (filename, data) => {
    try {
        fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    } catch (error) {
        console.log(error);
    }
};

const readFile = (filename) => {
    const textFile = fs.readFileSync(filename, "utf-8");
    return JSON.parse(textFile);
};

const findPersonaje = (id) => {
    const data = readFile("personajes.json");
    return data.find((personaje) => personaje.id == id);
};

module.exports = {
    getPersonajes,
    clearData,
    writeFile,
    readFile,
    findPersonaje,
};
