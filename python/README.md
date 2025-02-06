# Hangman Game

A simple command-line Hangman game written in Python. The game selects a random word from a predefined list, and the player must guess letters until they either complete the word or exceed the maximum number of incorrect guesses.

## Features

- Randomly selects a word from a predefined list
- Displays guessed letters while keeping unguessed letters hidden
- Tracks correct and incorrect guesses
- Ends the game when the player either wins or loses
- Visual representation of incorrect guesses using ASCII art

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/hangman-game.git
   ```
2. Navigate to the project folder:
   ```sh
   cd hangman-game
   ```
3. Ensure you have Python installed (version 3.x recommended).
4. Run the game:
   ```sh
   python hangman.py
   ```

## How to Play

- The game will display a hidden word with underscores.
- Enter one letter at a time to guess.
- Correct guesses will reveal the letters in the word.
- Incorrect guesses will add parts to the hangman figure.
- The game ends when you either guess the word or exceed the maximum allowed incorrect guesses.

## Technologies Used

- **Python** (random module for word selection)
- **ASCII Art** for Hangman visualization

## Future Enhancements

- Add support for custom word lists
- Implement difficulty levels
- Improve UI with colorized output

## License

This project is licensed under the **MIT License**.

## Acknowledgments

- Word list sourced from common vocabulary.
- Inspired by the classic Hangman game.
