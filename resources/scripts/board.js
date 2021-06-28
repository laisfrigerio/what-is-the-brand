export default class Board {

    constructor(el, totalCards) {
        this.el = el;
        this.totalCards = totalCards;
    }

    init = () => {
        let $board = document.querySelector(this.el);
        $board.innerHTML = "";
        for (let i = 0; i < this.totalCards; i++) {
            $board.appendChild(`
                <li class="card">
                    <p class="question">?</p>
                </li>
            `);
        }
    }
}