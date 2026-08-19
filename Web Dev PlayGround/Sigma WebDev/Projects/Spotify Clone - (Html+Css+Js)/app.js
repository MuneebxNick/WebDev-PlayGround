console.log("Hello World");

let currentSong = new Audio();
let songs

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs() {
  let a = await fetch(
    "http://127.0.0.1:3000/WebDev-PlayGround/Web%20Dev%20PlayGround/Sigma%20WebDev/Projects/Spotify%20Clone%20-%20(Html+Css+Js)/songs/",
  );
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}

const playMusic = (track, pause = false) => {
  // let audio = new Audio("./songs/" + track)
  currentSong.src = "./songs/" + track;
  if (!pause) {
    currentSong.play();
    play.src = "./img/pause.svg";
  }
  document.querySelector(".songInfo").innerHTML = decodeURI(track);
  document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
};

async function main() {
  // get list of songs
  songs = await getSongs();
  playMusic(songs[0], true);

  // shows all the songs in the playlist
  let songUL = document
    .querySelector(".songLists")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `
        <li>
                            <img class="invert" src="./img/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Nick</div>
                            </div>
                            <div class="playNow">
                                <span>Play Now</span>
                                <img class="invert" src="./img/play.svg" alt="">
                            </div>
                        </li>`;
  }

  // Attach an Event Listener to each Song
  Array.from(
    document.querySelector(".songLists").getElementsByTagName("li"),
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });

  // Attach an Event Listener to play , next previous button
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "./img/pause.svg";
    } else {
      currentSong.pause();
      play.src = "./img/play.svg";
    }
  });

  // Listen for time update event
  currentSong.addEventListener("timeupdate", () => {
    // console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songTime").innerHTML =
      `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(
        currentSong.duration,
      )}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // Add eventListener to SeekBar
  document.querySelector(".seakBar").addEventListener("click", (e) => {
    percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });

  // Add an event listener for hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });
  // Add an event listener for close button
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-150%";
  });

  // Add an event Listener to previous
  previous.addEventListener("click", () => {
    currentSong.pause();
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if (index - 1 >= 0) {
      playMusic(songs[index - 1]);
    }
  });

  // Add an event Listener to next
  next.addEventListener("click", () => {
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if (index + 1 < songs.length) {
      playMusic(songs[index + 1]);
    }
  });

  // Add an event Listener to Volume

  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
      currentSong.volume = parseInt(e.target.value) / 100;
    });
}

main();
