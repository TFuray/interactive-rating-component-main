import { useState } from "react"
import "./App.css"
import RatingNum from "./components/rating/RatingNum"
import StarBadge from "./components/rating/StarBadge"
import Submit from "./components/rating/Submit"
import TextOne from "./components/rating/TextOne"
import TextTwo from "./components/rating/TextTwo"

function App() {
  const [rating, setRating] = useState(null)
  const [submit, setSubmit] = useState(false)

  const handleRating = (num) => {
    setRating(num)
    console.log(rating)
  }

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-2 rounded-3xl bg-slate-800 w-2/6 m-auto mt-44">
        <div className="justify-self-center mt-5">
          <StarBadge />
        </div>
        <div className="col-span-3 row-start-2 ml-6 mt-8">
          <TextOne />
        </div>
        <div className="col-span-5 row-start-3 ml-6">
          <TextTwo />
        </div>
        <button
          className={`row-start-4 place-self-center rounded-full bg-${
            rating === 1 ? "slate-500" : "slate-700"
          }`}
          onClick={() => handleRating(1)}
        >
          <RatingNum
            rating={rating}
            num="1"
          />
        </button>
        <button
          className={`row-start-4 place-self-center bg-${rating === 2 ? 'slate-500' : 'slate-700'} rounded-full`}
          onClick={() => handleRating(2)}
        >
          <RatingNum
            rating={rating}
            num="2"
          />
        </button>
        <button
          className={`row-start-4 place-self-center bg-${rating === 3 ? 'slate-500' : 'slate-700'} rounded-full`}
          onClick={() => handleRating(3)}
        >
          <RatingNum
            rating={rating}
            num="3"
          />
        </button>
        <button
          className={`row-start-4 place-self-center bg-${rating === 4 ? 'slate-500' : 'slate-700'} rounded-full`}
          onClick={() => handleRating(4)}
        >
          <RatingNum
            rating={rating}
            num="4"
          />
        </button>
        <button
          className={`row-start-4 place-self-center bg-${rating === 5 ? 'slate-500' : 'slate-700'} rounded-full`}
          onClick={() => handleRating(5)}
        >
          <RatingNum
            rating={rating}
            num="5"
          />
        </button>

        <div className="col-span-3 col-start-2 row-start-5">
          <Submit />
        </div>
      </div>
    </>
  )
}

export default App
