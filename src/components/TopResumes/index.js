import './index.css'
import ResumeItem from './ResumeItem'

const ResumeImages = [
  {
    id: '1',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704881534/Project/Rectangle_139Resume1_ib1xwh.png',
  },
  {
    id: '2',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704881457/Project/Rectangle_134Resume2_waxaxo.svg',
  },
  {
    id: '3',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704881546/Project/Rectangle_136Resume3_fqwpsz.png',
  },
  {
    id: '4',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704881534/Project/Rectangle_139Resume1_ib1xwh.png',
  },
  {
    id: '5',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704881457/Project/Rectangle_134Resume2_waxaxo.svg',
  },
  {
    id: '6',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704881546/Project/Rectangle_136Resume3_fqwpsz.png',
  },  
]

const TopResumes = () => {
  return(
  <div className = "TopResumes">
    <div className = "TopResumes-80">
      <div className = "TopResumes-header">
        <div className = "TopResumes-header-left">
          <p className = "Topresumep">Top Resumes</p>
          <p className = "trwho">Who Are In Extremely Love With Eco Friendly System...</p>
        </div>
        <div className = "TopResumes-header-right">
          <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704907831/Project/crown_6941697_2crown_i4ugxl.svg" alt = "crown" />
          <p className = "premium">PREMIUM</p>
        </div>
      </div>
      <div className = "ResumeList">
        {ResumeImages.map((item) => (
          <ResumeItem
            key={item.id}
            ImgUrl={item.ImgUrl}
          />
        ))}
      </div>
      <div className = "show-all-button-div">
        <button className = "show-all-button">Show All</button>
      </div>
    </div>
  </div>
  )
}

export default TopResumes