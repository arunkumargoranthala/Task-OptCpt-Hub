import './index.css'
import BlogItem from './BlogItem'

const BlogImages = [
  {
    id: '1',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704883898/Project/Rectangle_61Blog_jkwq7x.svg'
  },
  {
    id: '2',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704883908/Project/Rectangle_61Blog_1_qhvtdl.svg'
  },
  {
    id: '3',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704883915/Project/Rectangle_61Blog_2_zufxyc.svg'
  },
  {
    id: '4',
    ImgUrl: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704883915/Project/Rectangle_61Blog_2_zufxyc.svg'
  },
]

const LatestBlogs = () => {
  return(
    <div>
      <div className = "LatestBlogs">
        <div className = "LatestBlogs-80">
          <p className = "Latest">Latest Blog or News</p>
          <div className = "Blogs">
            {BlogImages.map((item) => (
            <BlogItem
              key={item.id}
              ImgUrl={item.ImgUrl}
            />
          ))}
          </div>
        </div>
      </div>
      <img src = "https://res.cloudinary.com/dbomut0aw/image/upload/v1704885070/Project/image_19h_c5dv9a.svg" className = "h-imagee" alt = "h" />
    </div>
  )
}

export default LatestBlogs
