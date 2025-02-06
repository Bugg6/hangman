# Hangman Game

A simple React-based Hangman game where players guess letters to uncover a hidden word before reaching the maximum number of incorrect guesses.

## Features

- Randomly selects a word from a predefined list.
- Displays guessed letters correctly while hiding the remaining ones.
- Tracks correct and incorrect guesses.
- Ends the game when the player either wins or loses.
- Interactive letter buttons disable after being clicked.
- Visual representation of incorrect guesses using a Hangman SVG.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Bugg6/hangman.git
   ```
2. Navigate to the project folder:
   ```sh
   cd reactJs
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## How to Play

- Click on letters to guess them.
- Correct guesses will reveal the letters in the word.
- Incorrect guesses will add parts to the hangman figure.
- The game ends when either the word is guessed or the maximum number of incorrect guesses is reached.

## Technologies Used

- **React**
- **JavaScript**
- **CSS**

## Future Enhancements

- Add animations for correct and incorrect guesses.
- Implement difficulty levels with varying word lengths.
- Improve UI with a more engaging design.

## License

This project is licensed under the **MIT License**.

## Acknowledgments

- Word list sourced from common vocabulary.
- Inspired by the classic Hangman game.
