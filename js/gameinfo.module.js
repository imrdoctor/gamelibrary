export class Gameinfo {
    constructor() {
        this.gameInfo = document.querySelector(".game-info");
        this.games = document.querySelector(".main-sec");
    }

    async getGameInfo(gameId) {
        const apiUrl = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'fa8c6d1548msh85dc3e66b1b26ffp12ece2jsn1d23be7651d5',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(apiUrl, options);
            const result = await response.json();
            this.displayInformation(result);
        } catch (error) {
            console.error('Error fetching game info:', error);
        }
    }

    displayInformation(data) {
        let cartona = `
        <div class="container">
            <nav class="d-flex justify-content-between align-items-center">
                <div class="title">
                    <h1 class="text-center">${data.title}</h1>
                </div>
                <div class="close-icon">
                    <i class="fa-solid fa-xmark  rounded"></i>
                </div>
            </nav>
            <div class="information d-flex gap-4">
                <div class="row g-4 ">
                    <div class="game_thumbnail col-md-4 ">
                        <img class="w-100" src="${data.thumbnail}" alt="Game thumbnail" />
                    </div>
                    <div class="game_information col-md-8">
                        <h1>${data.title}</h1>
                        <h5>Category: <span class="badge text-bg-info">${data.genre}</span></h5>
                        <h5>Platform: <span class="badge text-bg-info">${data.platform}</span></h5>
                        <h5>Status: <span class="badge text-bg-info">${data.status}</span></h5>
                        <p>${data.description}</p>
                        <a class="text-white btn btn-outline-warning mt-2"  href="${data.game_url}">Show Game</a>
                    </div>
                </div>
            </div>
        </div>`;
        console.log(data);
        this.gameInfo.innerHTML = cartona;
        this.addCloseEvent();
    }

    addCloseEvent() {
        const closeIcon = this.gameInfo.querySelector(".close-icon");
        if (closeIcon) {
            closeIcon.addEventListener("click", () => {
                this.gameInfo.classList.add("d-none");
                this.games.classList.remove("d-none");
            });
        }
    }
}
