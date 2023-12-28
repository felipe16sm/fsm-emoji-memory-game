const createGameOverModal = () => {
  const gameOverModalElement = document.createElement("div");

  gameOverModalElement.classList.add("game-over-modal");

  const gameOverModalContainerElement = document.createElement("div");

  gameOverModalContainerElement.classList.add("game-over-modal-container");

  gameOverModalElement.appendChild(gameOverModalContainerElement);

  const headerElement = document.createElement("div");

  headerElement.textContent = "Parabéns você venceu!";

  gameOverModalContainerElement.appendChild(headerElement);

  const closeButtonElement = document.createElement("div");

  closeButtonElement.classList.add("game-over-modal-close-button");
  closeButtonElement.textContent = "Fechar";

  gameOverModalContainerElement.appendChild(closeButtonElement);

  gameOverModalElement.addEventListener("openGameOverModal", () => {
    gameOverModalElement.style.display = "flex";
  });

  gameOverModalElement.addEventListener("closeGameOverModal", () => {
    gameOverModalElement.style.display = "none";
  });

  closeButtonElement.addEventListener("click", () => {
    const closeEvent = new CustomEvent("closeGameOverModal");
    gameOverModalElement.dispatchEvent(closeEvent);
  });

  document.body.appendChild(gameOverModalElement);
};

createGameOverModal();
