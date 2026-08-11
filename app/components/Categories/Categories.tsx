import CategoryCard from "./CategoryCard"
export default function Categories(){
  return (
    <div >
      <h1 className="font-bold text-2xl flex flex-col items-center m-1">Shop by Category</h1>
      <div className="flex w-full justify-center">
      <CategoryCard/>
      </div>
    </div>
  )
}