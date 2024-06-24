const gifsPerPage = 6;
let currentPage = 1;

const gifs = [
    "https://www.icegif.com/wp-content/uploads/2023/04/icegif-865.gif",
    "https://www.icegif.com/wp-content/uploads/2023/04/icegif-873.gif",
    "https://i.pinimg.com/originals/b8/4a/c2/b84ac2fa1bdd53274d992b96a0bd5347.gif",
    "https://www.icegif.com/wp-content/uploads/2023/10/icegif-718.gif",
    "https://www.icegif.com/wp-content/uploads/2022/10/icegif-939.gif",
    "https://www.icegif.com/wp-content/uploads/2023/02/icegif-626.gif",
    "https://www.icegif.com/wp-content/uploads/fortnite-icegif-47.gif",
    "https://i.makeagif.com/media/12-22-2019/-_37OT.gif",
    "https://media1.tenor.com/m/17pFKrJQR4AAAAAd/default-dance-fortnite.gif",
    "https://www.icegif.com/wp-content/uploads/2022/01/icegif-1531.gif"
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);