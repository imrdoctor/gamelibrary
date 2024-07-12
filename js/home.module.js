import { Ui } from "./design.module.js";
import { Gameinfo } from "./gameinfo.module.js";

export class Home {
    constructor() {
        document.querySelectorAll('.nav-link').forEach(navLink => {
            this.changeActive(navLink);
        });
        this.loading = document.querySelector(".loading");
        this.ui = new Ui();
        this.gameinfo = new Gameinfo();
        this.getgames("mmorpg");
        this.gameInfo = document.querySelector(".game-info");
        this.games = document.querySelector(".main-sec");
    }

    async changeActive(navLink) {
        navLink.addEventListener('click', async () => {
            document.querySelector("ul.navbar-nav a.active").classList.remove("active");
            navLink.classList.add("active");
            const category = navLink.textContent;
            this.getgames(category);
        });
    }

    async getgames(category) {
        this.loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'fa8c6d1548msh85dc3e66b1b26ffp12ece2jsn1d23be7651d5',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const linkApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        
        try {
            const response = await fetch(linkApi, options);
            const data = await response.json();
            
            this.data = data;
            this.ui.displayGames(data);
            this.loading.classList.add("d-none");
            document.querySelectorAll(".allGames .col").forEach(col => {
                col.addEventListener("click", (e) => {
                    const gameId = col.getAttribute("data-id");
                    this.games.classList.add("d-none");
                    this.gameInfo.classList.remove("d-none");
                    this.gameinfo.getGameInfo(gameId);
                });
            });
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    }
}
