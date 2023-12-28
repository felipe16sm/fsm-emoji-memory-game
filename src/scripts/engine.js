const emojis = ["🐱", "🦝", "🦊", "🐶", "🐵", "🦁", "🐯", "🐮"];

const drawEmojisPositions = (emojis) => {
  let avaliablePositions = [];
  let drawedEmojisList = [];

  for (let i = 0; i < emojis.length * 2; i++) {
    avaliablePositions.push(i);
  }

  for (let i = 0; i < emojis.length; i++) {
    const position1 =
      avaliablePositions[Math.floor(Math.random() * avaliablePositions.length)];

    avaliablePositions = avaliablePositions.filter((e) => e !== position1);

    const position2 =
      avaliablePositions[Math.floor(Math.random() * avaliablePositions.length)];

    avaliablePositions = avaliablePositions.filter((e) => e !== position2);

    drawedEmojisList.push({ emoji: emojis[i], position: position1 });

    drawedEmojisList.push({ emoji: emojis[i], position: position2 });
  }

  drawedEmojisList.sort((a, b) => a.position - b.position);

  return drawedEmojisList;
};

const initialize = () => {
  document.querySelector(".container").innerHTML = "";

  const drawedEmojis = drawEmojisPositions(emojis);

  const cards = [];

  drawedEmojis.forEach((drawedEmoji) => {
    const card = new Card(drawedEmoji);

    cards.push(card);
  });

  new CardList(cards);
};

initialize();

document.addEventListener("initialize", () => {
  initialize();
});
