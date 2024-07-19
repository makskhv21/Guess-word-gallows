import { useState } from "react";
import {Container} from "./container";
import Drawing from "./Drawing";
import { foods } from "./foods";
import TopMessage from "./winLose"
import WordDisplay from "./WordDisplay";
import Keyboard, { KeyboardParent } from "./Keyboard";

function App() {
  const [favFood, setFavFood] =  useState(() => {
    return foods[Math.floor(Math.random() * foods.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectAnswers = guessedLetters.filter(
    letter => !favFood.includes(letter)
  );

  return (
    <div>
      <Container>
        <TopMessage />
        <Drawing userGuesses={incorrectAnswers.length} />
        <WordDisplay guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <KeyboardParent>
          <Keyboard />
        </KeyboardParent>
      </Container>
    </div>
  )
}

export default App