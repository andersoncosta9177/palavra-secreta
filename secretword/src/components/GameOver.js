import React from 'react'
import './gameover.css'


export const GameOver = ({retry}) => {
  return (
    <div>
    <h1>Fim de jogo!</h1>
    <button onClick={retry}>Resetar jogo</button>
</div>
  )
}
