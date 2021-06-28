import { createImageNode, createParagraphNode, inArray, sortArr, addClass,removeClass, containsClass } from './helpers';

export default class Game {

    constructor(el, level, jsonData) {
        this.el = el;
        this.cards = document.querySelectorAll(el);
        this.arraySort = sortArr(level);
        this.level = level;
        this.selectedCards = [];
        this.finalResponse = [];
        this.jsonData = jsonData;
    }

    init = () => {
        this.cards.forEach((card, index) => {
            const brand = this.jsonData.logos[this.arraySort[index]];

            if (brand.type === 'icon') 
                card.append(createImageNode(brand, index));
            else
                card.append(createParagraphNode(brand, index));
        
            /**
             * Add on click event listener
             */
            card.addEventListener("click", () => {
                this.onCardPressed(card);
            });
        });
    }

    /**
     * On card item pressed
     */   
    onCardPressed = (card) => {
        if (containsClass(card, 'show') && !containsClass(card, 'is-correct'))
            this.hide(card);
        else
            this.show(card);

        this.check();
        this.end();
    }

    /**
     * Show card
     */
    show = (card) => {
        if (!containsClass(card, 'is-correct')) {
            this.selectedCards.push(card);
            addClass(card, ['show']);
        }
    }

    /**
     * Hide card
     */
    hide = (card) => {
        if (this.selectedCards.length === 1) { // flip back card, if has only one card selected
            const check = inArray(this.selectedCards, card); // check if this card is in array
            if (check) {
                this.selectedCards = []; // remove element from array
                removeClass(card, ['show']); // remove class show from card element
            }
        }
    }

    check = () => {
        /**
         * Check is correct or not
         */
        if (this.selectedCards.length === 2) {
            const cardOne = this.selectedCards[0];
            const cardTwo = this.selectedCards[1];

            /**
             * The slug data attribute is in the <img> tag or <p> tag
             */
            const slugOne = cardOne.children[1].getAttribute("data");
            const slugTwo = cardTwo.children[1].getAttribute("data");

            if (slugOne === slugTwo)
                this.correct(cardOne, cardTwo);
            else 
                this.wrong(cardOne, cardTwo);

            this.selectedCards = [];
        }
    }

    /**
     * Case cards are correct
     */
    correct = (cardOne, cardTwo) => {
        this.finalResponse.push(cardOne, cardTwo);
        addClass(cardOne, ['is-correct']);
        addClass(cardTwo, ['is-correct']);
    }

    /**
     * Case cards are differents
     */
    wrong = (cardOne, cardTwo) => {
        setTimeout(() => {
            removeClass(cardOne, ['show']);
            removeClass(cardTwo, ['show']);
        }, 2000);
    }

    /**
     * Check case all cards were selected
     */
    end = () => {
        if (this.finalResponse.length === this.level) {
            alert("Você concluiu a partida!!! Pressione f5 para jogar novamente");
        }
    }
}