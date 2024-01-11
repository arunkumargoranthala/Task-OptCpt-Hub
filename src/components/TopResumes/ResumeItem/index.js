import './index.css'

const ResumeItem = (props) => {
    const {ImgUrl} = props
  return(
    <div className = "ResumeItem">
      <div className = "ResumeItem-left">
          <img src = {ImgUrl} className = "ResumeImage" alt = "Resume" />
      </div>
      <div className = "ResumeItem-right">
        <div className = "side12">
          <p className = "Iorem-ipsum">Iorem ipsum</p>
          <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704907831/Project/crown_6941697_2crown_i4ugxl.svg" alt = "crown" className = "crown" />
        </div>
        <p className = "Resume-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, orrandomised words which don't look even slightly</p>
      </div>
    </div>
  )
}

export default ResumeItem
