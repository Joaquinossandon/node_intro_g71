const {
    getPersonajes,
    clearData,
    findPersonaje,
    readFile,
    writeFile,
} = require("./utils");

const [idPersonaje] = process.argv.slice(2);

const main = async () => {
    const personajes = await getPersonajes();
    const clearPersonajes = clearData(personajes);
    writeFile("personajes.json", clearPersonajes);
    if (idPersonaje) {
        const data = findPersonaje(idPersonaje);
        console.log(data);
        return;
    }

    const data = readFile("personajes.json");
    console.log(data);
};

main();
