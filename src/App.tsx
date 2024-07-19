import { useState } from "react";
import {Container} from "./container";
import { foods } from "./foods";
import TopMessage from "./winLose"

function App() {
  const [favFood, setFavFood] =  useState(() => {
    return foods[Math.floor(Math.random() * foods.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div>
      <Container>
        <TopMessage />
      </Container>
    </div>
  )
}

export default App