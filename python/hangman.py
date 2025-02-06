import random

print("Let's play a game of hangman")
print("----------------------------")

possible_answers: list[str] = [
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
]

random_answer: str = random.choice(possible_answers)

num_of_wrong_guesses_allowed: int = 9

for _ in random_answer:
    print("_", end=" ")


def print_hangman(wrong: int) -> None:
    if wrong == 0:
        print("\n")
    if wrong == 1:
        print("\n ===")
    if wrong == 2:
        print("\n    |")
        print("    |")
        print("    |")
        print("   ===")
    if wrong == 3:
        print("\n+---+")
        print("    |")
        print("    |")
        print("    |")
        print("   ===")
    elif wrong == 4:
        print("\n+---+")
        print("O   |")
        print("    |")
        print("    |")
        print("   ===")
    elif wrong == 5:
        print("\n+---+")
        print("O   |")
        print("|   |")
        print("    |")
        print("   ===")
    elif wrong == 6:
        print("\n+---+")
        print(" O  |")
        print("/|  |")
        print("    |")
        print("   ===")
    elif wrong == 7:
        print("\n+---+")
        print(" O  |")
        print("/|\\ |")
        print("    |")
        print("   ===")
    elif wrong == 8:
        print("\n+---+")
        print(" O  |")
        print("/|\\ |")
        print("/   |")
        print("   ===")
    elif wrong == 9:
        print("\n+---+")
        print(" O   |")
        print("/|\\  |")
        print("/ \\  |")
        print("    ===")


def print_word(guessed: list) -> int:
    count: int = 0
    correct_letters: int = 0
    for letter in random_answer:
        if letter in guessed:
            print(random_answer[count], end=" ")
            correct_letters += 1
        else:
            print(" ", end=" ")
        count += 1

    return correct_letters


def print_lines() -> None:
    print("\r")
    for _ in random_answer:
        print("\u203E", end=" ")


length_of_random_answer: int = len(random_answer)
num_of_wrong_guesses: int = 0
num_correct_guesses: int = 0
current_letters_guessed: list = []

while (
    num_of_wrong_guesses != num_of_wrong_guesses_allowed
    and num_correct_guesses != length_of_random_answer
):
    print("\nLetters guessed: ")
    for letter in current_letters_guessed:
        print(letter, end=" ")

    letter_guessed: str = input("\nPlease guess a letter: ")

    if letter_guessed in random_answer:
        print_hangman(num_of_wrong_guesses)
        current_letters_guessed.append(letter_guessed)
        num_correct_guesses = print_word(current_letters_guessed)
        print_lines()
    else:
        num_of_wrong_guesses += 1
        current_letters_guessed.append(letter_guessed)
        print_hangman(num_of_wrong_guesses)
        num_correct_guesses = print_word(current_letters_guessed)
        print_lines()

print("\nGame Over!")
