import axios from 'axios'

export const purchase = (category, type) => {
  // axios call goes here
  // category = broad item group (ie soaps, candles, tealights)
  // type = scent (ie lavender, orange, rose)

  axios
  .post('http://localhost:3000/checkout', {
    title: "Hello World!",
    body: "test"
  })
  .then((response) => {
    console.log(response)
  })
}