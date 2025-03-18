// Full Lyrics with timestamps (in seconds) and singer identification
const lyrics = [
  {
    time: 0,
    text: "(Are you ready, hey, are you ready for this?)",
    singer: "freddie",
  },
  {
    time: 3,
    text: "(Are you hanging on the edge of your seat?)",
    singer: "freddie",
  },
  { time: 6, text: "I need a break beat, uh", singer: "wyclef" },
  {
    time: 9,
    text: "(Are you ready, hey, are you ready for this?)",
    singer: "freddie",
  },
  {
    time: 12,
    text: "(Are you hanging on the edge of your seat?)",
    singer: "freddie",
  },
  { time: 15, text: "I need a break beat, uh", singer: "wyclef" },
  {
    time: 18,
    text: "(Are you ready, hey, are you ready for this?)",
    singer: "freddie",
  },
  {
    time: 21,
    text: "(Are you hanging on the edge of your seat?)",
    singer: "freddie",
  },
  { time: 24, text: "I need a break beat, uh", singer: "wyclef" },
  { time: 27, text: "(Outta the doorway the bullets rip)", singer: "freddie" },
  {
    time: 30,
    text: "(Repeating to the sound of the beat, hey)",
    singer: "freddie",
  },

  
  { time: 30, text: "Another one bites the dust", singer: "freddie" },
  { time: 34, text: "Another one bites the dust", singer: "freddie" },
  {
    time: 38,
    text: "And another one gone, and another one gone",
    singer: "freddie",
  },
  { time: 42, text: "Another one bites the dust, hey", singer: "freddie" },
  { time: 46, text: "Hey, I'm gonna get you too", singer: "freddie" },
  { time: 50, text: "Another one bites the dust", singer: "freddie" },

  
  {
    time: 54,
    text: "How do you think I'm going to get along",
    singer: "freddie",
  },
  { time: 58, text: "Without you, when you're gone?", singer: "freddie" },
  {
    time: 62,
    text: "You took me for everything that I had",
    singer: "freddie",
  },
  { time: 66, text: "And kicked me out on my own", singer: "freddie" },
  { time: 70, text: "Are you happy? Are you satisfied?", singer: "freddie" },
  { time: 74, text: "How long can you stand the heat?", singer: "freddie" },
  { time: 78, text: "Out of the doorway, the bullets rip", singer: "freddie" },
  { time: 82, text: "To the sound of the beat, look out", singer: "freddie" },

  
  { time: 86, text: "Another one bites the dust", singer: "freddie" },
  { time: 90, text: "Another one bites the dust", singer: "freddie" },
  {
    time: 94,
    text: "And another one gone, and another one gone",
    singer: "freddie",
  },
  { time: 98, text: "Another one bites the dust, hey", singer: "freddie" },
  { time: 102, text: "Hey, I'm gonna get you too", singer: "freddie" },
  { time: 106, text: "Another one bites the dust", singer: "freddie" },

  
  { time: 110, text: "(Instrumental break)", singer: "instrumental" },

  
  {
    time: 130,
    text: "There are plenty of ways that you can hurt a man",
    singer: "freddie",
  },
  { time: 134, text: "And bring him to the ground", singer: "freddie" },
  {
    time: 138,
    text: "You can beat him, you can cheat him, you can treat him bad",
    singer: "freddie",
  },
  { time: 142, text: "And leave him when he's down, yeah", singer: "freddie" },
  {
    time: 146,
    text: "But I'm ready, yes, I'm ready for you",
    singer: "freddie",
  },
  { time: 150, text: "I'm standing on my own two feet", singer: "freddie" },
  { time: 154, text: "Out of the doorway, the bullets rip", singer: "freddie" },
  { time: 158, text: "Repeating to the sound of the beat", singer: "freddie" },

  
  { time: 162, text: "Another one bites the dust", singer: "freddie" },
  { time: 166, text: "Another one bites the dust", singer: "freddie" },
  {
    time: 170,
    text: "And another one gone, and another one gone",
    singer: "freddie",
  },
  { time: 174, text: "Another one bites the dust, hey", singer: "freddie" },
  { time: 178, text: "Hey, I'm gonna get you too", singer: "freddie" },
  { time: 182, text: "Another one bites the dust", singer: "freddie" },
];

let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricFreddie = document.getElementById("lyric-freddie");
const lyricOthers = document.getElementById("lyric-others");

// Function to update lyrics in sync with the audio
function displayLyrics() {
    const currentTime = audio.currentTime;

    if (currentLyricIndex < lyrics.length && currentTime >= lyrics[currentLyricIndex].time) {
        if (lyrics[currentLyricIndex].singer === "freddie") {
            lyricFreddie.textContent = lyrics[currentLyricIndex].text;
            lyricOthers.textContent = ""; // Clear the other lyric line
        } else {
            lyricOthers.textContent = lyrics[currentLyricIndex].text;
            lyricFreddie.textContent = ""; // Clear Freddie's line
        }
        currentLyricIndex++;
    }
}

// Event listener for syncing lyrics when audio plays
audio.addEventListener("timeupdate", displayLyrics);
