import './index.css'

const LatestJobsItem = (props) => {
  
  const {Title, company, imageURL} = props

  return(
    <div className = "LatestJobsItem">
      <p className = "LatestJobsItem-Title">{Title}</p>
      <p className = "LatestJobsItem-copany">{company}</p>
      <div className = "Hyderabad">
        <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704906127/Project/maps-flags_447031loc_wphsxx.svg" alt = "locaton-icon" />
        <p className = "city-para">Hyderabad</p>
      </div>
      <div className = "Hyderabad">
        <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704906136/Project/portfolio_8350440bag_fdj17r.svg" alt = "locaton-icon" />
        <p className = "city-para">2 Years</p>
      </div>
      <div className = "LatestJobsItem-child">
        <p className = "city-para">1 hours ago</p>
        <div className = "LatestJobsItem-child-image-div">
          <img src = {imageURL} alt = {company} className = "latest-jobs-company-image" />
        </div>
      </div>
    </div>
  )
}

export default LatestJobsItem