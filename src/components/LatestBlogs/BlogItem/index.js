import './index.css'

const Blogitem = (props) => {
  const {ImgUrl} = props
  return(
    <div className = "Blogitem">
      <div>
        <img src = {ImgUrl} alt = "BlogImage" className = "BlogImage" />
      </div>
      <div className = "padding-div">
        <div className = "date-place">
          <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704906711/Project/graph_8191876_1Graph_dflijo.svg" alt = "icon" />
          <p className = "date-text">20th February, 2023</p>
          <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704906704/Project/clock_2838794_2clock_aa9old.svg" alt = "icon" />
          <p className = "date-time">5 min read</p>
        </div>
        <div>
          <p className = "para-imp"><span className = "spanelement">Promodex </span>: Favicon - Elevating Your Website with a Small But Mighty Label it is a long established fact. then the website improves.</p>
          <p className = "para-imp">Read More ></p>
        </div>
      </div>
    </div>
  )
}

export default Blogitem