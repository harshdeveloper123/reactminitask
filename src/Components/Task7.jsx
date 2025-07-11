import React from 'react'

function Task7() {
    const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible."
];

const genrandomquote = Math.floor(Math.random()*quotes.length);
const quote = quotes[genrandomquote]


  return (
    <div>
      {quote}
    </div>
  )
}

export default Task7
