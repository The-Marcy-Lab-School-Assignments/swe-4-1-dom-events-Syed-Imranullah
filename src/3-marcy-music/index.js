const playlists = [
  {
    title: "Chill Vibes",
    image: "./img/playlist-chill.jpg",
    description: "A playlist for chill vibes",
  },
  {
    title: "Focus",
    image: "./img/playlist-focus.jpg",
    description: "A playlist for focus",
  },
  {
    title: "Late Night",
    image: "./img/playlist-late-night.jpg",
    description: "A playlist for late night",
  },
  {
    title: "Love Songs",
    image: "./img/playlist-love.jpg",
    description: "A playlist for love songs",
  },
  {
    title: "Oldies",
    image: "./img/playlist-oldies.jpg",
    description: "A playlist for oldies",
  },
  {
    title: "Sad",
    image: "./img/playlist-sad.jpg",
    description: "A playlist for sad songs",
  },
];

// Add your code here...

const playListGrid = document.querySelector("#playlists-grid");
const nowPlayingTitle = document.querySelector("#now-playing-title");

playlists.forEach((playlist) => {
  const playlistList = document.createElement("li");
  playlistList.classList.add("playlist-card");
  playlistList.dataset.title = `${playlist.title}`;

  const playlistImg = document.createElement(`img`);
  playlistImg.src = playlist.image;
  playlistImg.alt = `${playlist.title} playlist cover`;

  const playlistP = document.createElement("p");
  playlistP.textContent = `${playlist.title}`;

  playlistList.append(playlistImg, playlistP);
  playListGrid.append(playlistList);
});

playListGrid.addEventListener("click", (event) => {
  const clicked = event.target.closest(".playlist-card");

  if (!clicked) return;

  const selected = document.querySelector(".selected");

  if (selected) {
    selected.classList.remove("selected");
  }

  clicked.classList.add("selected");

  nowPlayingTitle.textContent = clicked.dataset.title;
});
