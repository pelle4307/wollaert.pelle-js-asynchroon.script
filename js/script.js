function getServerData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = ["Senne Evens", "Ymke Huybrechts", "Rens Lettanie", "Matthias Massart", "Loula Siera", "Eli Vanrijkelen", "Pelle Wollaert"];
            resolve(data);
        }, 2000);
    });
}

document.getElementById('loadButton').addEventListener('click', fetchData);

async function fetchData() {
    const container = document.querySelector('.container');
    const ul = document.getElementById('studentListElement');
    const button = document.getElementById('loadButton');

    container.classList.add('loading');

    const data = await getServerData();

    if (data && data.length > 0) {
        ul.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            const li = document.createElement('li');
            li.textContent = data[i];
            ul.appendChild(li);
        }
    }

    container.classList.remove('loading');
}



