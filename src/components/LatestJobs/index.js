import './index.css'
import LatestJobsItem from './LatestJobsItem'

const projectsList = [
  {
    id: '1',
    Title: 'Digital Marketing Intern',
    company: 'Adlink Digital Marketing And...',
    imageURL: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704867393/Project/image_8Adlink_wgtwkt.svg',
  },
  {
    id: '2',
    Title: 'Sales Executive-Opening Stock',
    company: 'Convey Tech Labs',
    imageURL: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704868080/Project/Convey_Logo_2Convey_ywjlqc.svg',
  },
  {
    id: '3',
    Title: 'Ui/Ux designer',
    company: 'CIVICA',
    imageURL: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704868087/Project/image_10CIVICA_z58o1r.svg',
  },
  {
    id: '4',
    Title: 'Ui/Ux designer',
    company: 'CIVICA',
    imageURL: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704868087/Project/image_10CIVICA_z58o1r.svg',
  },
]

const LatestJobs = () => {
  return(
    <div className = "latest-jobs-div">
        <div className = "companies-table">
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863251/Project/Rectangle_361GDUIBL_yb5b5h.svg" alt = "Graphic" className = "GD-image"/>
          </div>
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863227/Project/Rectangle_363GDUIB_vegnpp.svg" alt = "Graphic" className = "GD-image"/>
          </div>
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863251/Project/Rectangle_361GDUIBL_yb5b5h.svg" alt = "Graphic" className = "GD-image"/>
          </div>
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863227/Project/Rectangle_363GDUIB_vegnpp.svg" alt = "Graphic" className = "GD-image"/>
          </div>
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863251/Project/Rectangle_361GDUIBL_yb5b5h.svg" alt = "Graphic" className = "GD-image"/>
          </div>
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863227/Project/Rectangle_363GDUIB_vegnpp.svg" alt = "Graphic" className = "GD-image"/>
          </div>
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863251/Project/Rectangle_361GDUIBL_yb5b5h.svg" alt = "Graphic" className = "GD-image"/>
          </div>
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863227/Project/Rectangle_363GDUIB_vegnpp.svg" alt = "Graphic" className = "GD-image"/>
          </div>
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863251/Project/Rectangle_361GDUIBL_yb5b5h.svg" alt = "Graphic" className = "GD-image"/>
          </div>
          <div className = "companies-table-item">
            <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704863227/Project/Rectangle_363GDUIB_vegnpp.svg" alt = "Graphic" className = "GD-image"/>
          </div>
        </div>
        <div className = "latest-jobs-div1">
          <div className = "latest-jobs-heading-div">
            <div className = "latest-jobs-heading-div-left">
              <p className = "latest-jobs">Latest Jobs</p>
              <p className = "More-job-posts">More Job Posts ?</p>
              <button className = "view-all-button">VIEW ALL</button>
            </div>
            <div className = "latest-jobs-heading-div-right">
              <button className = "post-a-job-button">POST A JOB</button>
            </div>
          </div>
          <div className = "latest-jobs-list-div">
            {projectsList.map((project) => (
          <LatestJobsItem
            key={project.id}
            Title={project.Title}
            company={project.company}
            imageURL={project.imageURL}
          />
        ))}
          </div>
        </div>
    </div>
  )
}

export default LatestJobs