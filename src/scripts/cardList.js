class CardList {
  containerElement = document.querySelector(".container");

  selectedCards = [];
  loading = false;

  constructor(cards) {
    this.cards = cards;

    this.createHeaderElement();
    this.createCardListElement();
    this.createResetButton();
  }

  createHeaderElement() {
    const headerElement = document.createElement("h1");

    headerElement.textContent = "JOGO DA MEMÓRIA";

    this.containerElement.appendChild(headerElement);
  }

  createCardListElement() {
    const cardListElement = document.createElement("div");

    cardListElement.classList.add("card-list");

    this.cards.forEach((card) => {
      cardListElement.appendChild(card.cardElement);

      card.cardElement.addEventListener("click", () => {
        this.handleCardClick(card);
      });
    });

    this.containerElement.appendChild(cardListElement);
    this.cardListElement = cardListElement;
  }

  handleCardClick(card) {
    if (card.cardElement.classList.contains("card-open") || this.loading) {
      console.log("Card não pode ser selecionado!");
      return;
    }

    this.selectedCards.push(card);
    card.cardElement.classList.add("card-open");

    if (this.selectedCards.length === 2) {
      this.loading = true;
      setTimeout(() => {
        if (this.selectedCards[0].emoji !== this.selectedCards[1].emoji) {
          this.selectedCards[0].cardElement.classList.remove("card-open");
          this.selectedCards[1].cardElement.classList.remove("card-open");
        }

        this.selectedCards = [];
        this.loading = false;

        this.verifyVictory();
      }, 500);
    }
  }

  verifyVictory() {
    const openedCards = document.querySelectorAll(".card-open");

    if (this.cards.length === openedCards.length) {
      const victoryEvent = new CustomEvent("openGameOverModal");
      document.querySelector(".game-over-modal").dispatchEvent(victoryEvent);
    }
  }

  createResetButton() {
    const resetButtonElement = document.createElement("div");

    resetButtonElement.textContent = "RESET GAME";
    resetButtonElement.classList.add("reset-button");
    resetButtonElement.style.width =
      this.cardListElement.getBoundingClientRect().width + "px";

    resetButtonElement.addEventListener("click", () => {
      const initializeEvent = new CustomEvent("initialize");

      document.dispatchEvent(initializeEvent);
    });

    this.containerElement.appendChild(resetButtonElement);
  }
}
