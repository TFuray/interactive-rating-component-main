const RatingNum = ({ num }) => {
  return (
    <div
      className="
      h-12
      w-12
      rounded-full
      bg-slate-700
      flex
      justify-center
      items-center
"
    >
      <div className="text-gray-500 font-bold">{num}</div>
    </div>
  )
}
export default RatingNum
