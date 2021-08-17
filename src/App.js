import "./styles.css";
import { useState } from "react";

const musicDB = {
  Rock: [
    {
      Title: "Ten",
      Artist: "Pearl Jam",
      Rating: "4/5"
    },
    {
      Title: "Nevermind",
      Artist: "Nirvana",
      Rating: "3/5"
    },
    {
      Title: "The Dark Side of the Moon ",
      Artist: "Pink Floyd",
      Rating: "4/5"
    },
    {
      Title: "Mothership",
      Artist: "Led Zeppelin",
      Rating: "4/5"
    },
    {
      Title: "Three Wheels Nine Lives",
      Artist: "Thermal and a Quarter",
      Rating: "3/5"
    }
  ],

  Pop: [
    { Title: "To Let a Good Thing Die", Artist: "Bruno Major", Rating: "4/5" },
    { Title: "Room For Squares", Artist: "John Mayer", Rating: "5/5" },
    { Title: "Hi", Artist: "Dishaan", Rating: "3.5/5" },
    {
      Title: "Lead Feet Paper Shoes",
      Artist: "Spud in the Box",
      Rating: "3.5/5"
    },
    { Title: "Rubber Soul", Artist: " The Beatles", Rating: "5/5" }
  ],

  Indie: [
    { Title: "Wachito Rito", Artist: "Boy Pablo", Rating: "4/5" },
    { Title: "Guruub", Artist: "Samar Mehdi", Rating: "4/5" },
    { Title: "WKND FRNDS", Artist: "F16s", Rating: "4/5" },
    { Title: "Geography", Artist: "Tom Misch", Rating: "4.5/5" },
    { Title: "Another One", Artist: "Mac Demarco", Rating: "4/5" }
  ]
};

var musicInDB = Object.keys(musicDB);

export default function App() {
  const [musicType, setMusicType] = useState(false);
  function clickEventHandler(music) {
    setMusicType(music);
    console.log(music);
  }

  return (
    <div className="App" style={{ width: "800px" }}>
      <h2>
        Music Album Recommendations <span role="img">🎸</span>
      </h2>
      <div style={{ padding: "1rem" }}>Time to bless your ears!</div>

      <div>
        {musicInDB.map((item) => {
          return (
            <button key={item} onClick={() => clickEventHandler(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <ul style={{ listStyle: "none" }}>
          {musicType &&
            musicDB[musicType].map((music) => (
              <li
                key={music.title}
                style={{
                  padding: "1rem",
                  margin: "2rem ",
                  border: "1px solid",
                  borderRadius: "0.75rem"
                }}
              >
                <div style={{ fontSize: "larger", margin: "0.5rem" }}>
                  {"Album Name: "}
                  {music.Title}
                </div>
                <div style={{ margin: "0.5rem" }}>
                  {" "}
                  {"Artist: "}
                  {music.Artist}{" "}
                </div>
                <div style={{ fontSize: "smaller", margin: "0.5rem" }}>
                  {"Rating: "}
                  {music.Rating}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
