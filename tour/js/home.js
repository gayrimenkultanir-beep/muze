const container = document.getElementById("episodes");

episodes.forEach(ep => {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${ep.title}</h3>
  `;

  card.onclick = () => {
    window.location.href = `episode.html?id=${ep.id}`;
  };

  container.appendChild(card);

});
