class Card {
  constructor({ emoji, position }) {
    this.emoji = emoji;
    this.position = position;

    this.createCardElement();
  }

  createCardElement() {
    const cardElement = document.createElement("div");

    cardElement.textContent = this.emoji;
    cardElement.setAttribute("position", this.position);
    cardElement.classList.add("card");

    this.cardElement = cardElement;
  }
}
