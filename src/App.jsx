// import './App.css'
import BackGround from './Components/BackGround/BackGround'
import Banner from './Components/Banner/Banner'
import BookSection from './Components/Book/BookSection'
import MissionSection from './Components/MissionSection/MissionSection'
import Navbar from './Components/Navbar/Navbar'
import ProductSection from './Components/Products/ProductSection'

function App() {
  return (
    <>
      <div className="bg-[#EA2127]">
        <Navbar />
        <BackGround />
        <Banner />
      </div>
      <div>
        <ProductSection /> {/* Correctly rendered ProductSection component */}
      </div>
      <div className="bg-[#000]">
        <BookSection/>
      </div>
      <div className="">
        <MissionSection/>
      </div>
    </>
  )
}

export default App;
