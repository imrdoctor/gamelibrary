export class Ui {
    constructor() { }

    displayGames(data) {
        let cartona = ``;
        for (let i = 0; i < data.length; i++) {
            const game = data[i];
            cartona += `<div data-id="${data[i].id}" class="col">
                 <div class="game-img border border-1 border-dark p-3 rounded">
                <figure>
                    <img class="w-100" src="${game.thumbnail}" alt="Game thumbnail" />
                    <figcaption>
                        <div class="d-flex justify-content-between mt-2">
                            <span class="title">${game.title}</span>
                            <h5><span class="badge text-bg-secondary">Free</span></h5>
                        </div>
                        <p class="text-center text-white-50">${game.short_description.split(' ').slice(0, 5).join(' ')}</p>
                    </figcaption>
                </figure>
                <div class="footer"></div>
            </div>
            <div class="d-flex justify-content-between border border-1 border-dark p-2">
                <span class="badge text-bg-secondary">${game.genre}</span>
                <span class="badge text-bg-secondary">${game.platform}</span>
            </div>
        </div>`;
        }
        document.querySelector(".allGames").innerHTML = cartona;
    }
    displayInformation(data) {
        let cartona = ``
        cartona += `            
        <div class="container">
                <nav class="d-flex justify-content-between align-items-center">
                    <div class="title">
                        <h1 class="text-center">Genshin Impact</h1>
                    </div>
                    <div class="close-icon">
                        <i class="fa-solid fa-xmark fs-2 w-100 p-2 h-100 border rounded-circle border-2"></i>
                    </div>
                </nav>
                <div class="information d-flex gap-4">
                    
                    <div class="row g-4 ">
                        <div class="game_thumbnail col-md-4 ">
                            <img class="w-100" src="./imgs/thumbnail.jpg" alt="Game thumbnail" />
                        </div>
                        <div class="game_information col-md-8">
                            <h1>Genshin Impact</h1>
                            <h5>Category: <span class="badge text-bg-info">New</span></h5>
                            <h5>Platform: <span class="badge text-bg-info">New</span></h5>
                            <h5>Status: <span class="badge text-bg-info">New</span></h5>
                            <p>If you’ve been looking for a game to scratch that open-world ARPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact. The developer, known previously for Honkai Impact 3rd, take players to the world of Teyvat, a vast open-world designed for extended exploration. Players not only explore dungeons, but climb mountains, trees, and buildings to discover all kinds of secrets. Of course, the main character doesn’t travel alone. Instead, players build a four-player group out of over 20 characters that can be swapped out to create the best group for any particular mission. The characters, each with different skills filling out the classic RPG types as well as distinct elemental focuses, can be obtained via gameplay or the game’s gacha mechanics – as is gear. Both characters and gear are upgraded in the game via the in-depth crafting system. In addition, the game offers players an adventurer system that provides them with even more to do, be it daily quests, small favors for the locals, or big continent-traveling quests. The adventurer system also rewards players for their activities with a wide variety of items. Genshin Impact is available to players on PC, PlayStation 4, and mobile devices. It also features a multiplayer mode allowing up to four players to play together and cross-play across all four platforms, however, PlayStation 4 does not allow for cross-progression.</p>
                            <button type="button" class="btn btn-outline-warning mt-2">Warning</button>
                        </div>
                    </div>

                </div>
            </div>`
            document.querySelector(".game-info ").innerHTML = cartona;
    }
}
