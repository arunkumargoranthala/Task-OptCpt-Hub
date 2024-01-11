import './index.css'
import Recents from './Recent'
import Adds from './Adds'

const AdsAndRecent = () => {
  return(
    <div className = "AdsAndRecent">
      <div className = "h-adss">
        <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704870504/Project/Rectangle_394hadd1_fpbljj.svg" alt = "hadd1" className="h-add1" />
        <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704870513/Project/Rectangle_393hadd2_zwdtbq.svg" alt = "hadd2" className="h-add1" />
      </div>
      <div className = "AdsAndRecent-child">
        <div className = "AdsAndRecent-child-80">
          <div className = "recent-container">
            <Recents />
          </div>
          <div className = "v-adds-container">
            <Adds />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdsAndRecent