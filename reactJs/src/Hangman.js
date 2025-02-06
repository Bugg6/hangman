import { useEffect, useState } from "react";
import HangmanSVG from "./HangmanSVG";

const Hangman = () => {
  const ALPHABET = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const POSSIBLE_ANSWERS = [
    "harmony",
    "venture",
    "candles",
    "journey",
    "breathe",
    "lantern",
    "whisper",
    "fortune",
    "orchard",
    "gravity",
    "twinkle",
    "beneath",
    "crimson",
    "charity",
    "freedom",
    "trouble",
    "diamond",
    "garland",
    "promise",
    "serpent",
    "miracle",
    "picture",
    "fiction",
    "harvest",
    "capture",
    "dolphin",
    "holiday",
    "passion",
    "fragile",
    "fountain",
    "eclipse",
    "twilight",
    "flicker",
    "gateway",
    "shelter",
    "forever",
  ];

  const [word, setWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);

  const pickRandomWord = () => {
    setWord(
      POSSIBLE_ANSWERS[
        Math.floor(Math.random() * POSSIBLE_ANSWERS.length)
      ].toUpperCase()
    );
  };

  const resetGame = () => {
    pickRandomWord();
  };

  const onGuessLetter = (guessedLetter) => {
    if (word.includes(guessedLetter)) {
      setCorrectLetters([...correctLetters, guessedLetter]);
    } else {
      setIncorrectGuesses([...incorrectGuesses, guessedLetter]);
    }
  };

  useEffect(() => {
    if (
      correctLetters.length &&
      word.split("").every((letter) => correctLetters.includes(letter))
    ) {
      console.log("YOU WIN!");
    }
  }, [correctLetters]);

  useEffect(() => {
    if (incorrectGuesses.length === 10) {
      console.log("YOU LOSE");
    }
  }, [incorrectGuesses]);

  useEffect(resetGame, []);

  const hiddenWord = word
    .split("")
    .map((letter) => (correctLetters.includes(letter) ? letter : "_"))
    .join("");

  return (
    <div>
      <p className="hiddenWord">{hiddenWord}</p>
      <div>
        {ALPHABET.map((letter, index) => {
          return (
            <button
              key={index}
              disabled={
                correctLetters.includes(letter) ||
                incorrectGuesses.includes(letter)
              }
              onClick={() => onGuessLetter(letter)}
            >
              {letter}
            </button>
          );
        })}
        <HangmanSVG numberOfIncorrectGuesses={incorrectGuesses.length} />
      </div>
    </div>
  );
};

export default Hangman;
