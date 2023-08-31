import "./App.css"
import StarBadge from "./components/rating/StarBadge"
import TextOne from "./components/rating/TextOne"
import TextTwo from "./components/rating/TextTwo"
import RatingNum from "./components/rating/RatingNum"
import Submit from "./components/rating/Submit"

function App() {
  return (
    <>
         <div className="grid grid-cols-5 grid-rows-5 gap-2 rounded-3xl bg-slate-800 w-2/6 m-auto mt-44">
        <div className="justify-self-center mt-5">
          <StarBadge />
          </div>
          <div className="col-span-3 row-start-2 ml-6 mt-8"><TextOne /></div>
          <div className="col-span-5 row-start-3 ml-6"><TextTwo/></div>
          <div className="row-start-4 place-self-center"><RatingNum num='1'/></div>
          <div className="row-start-4 place-self-center"><RatingNum num='2'/></div>
          <div className="row-start-4 place-self-center"><RatingNum num='3'/></div>
          <div className="row-start-4 place-self-center"><RatingNum num='4'/></div>
          <div className="row-start-4 place-self-center"><RatingNum num='5'/></div>
          <div className="col-span-3 col-start-2 row-start-5"><Submit/></div>
        </div>
    </>
  )
}

export default App
