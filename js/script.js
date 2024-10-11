function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = ["Leerling 1", "Leerling 2", "Leerling 3", "..."];
            resolve(data);
        }, 2000);
    });
}