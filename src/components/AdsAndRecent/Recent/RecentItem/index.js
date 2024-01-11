import './index.css'
import RecentSubItem from './RecentSubItem'

const SubItems = [
  {
    id: '1',
    Subtitle: 'Android training demo @29th feb',
    st1: 'fee : $ 300',
    st2: 'duration : 30 hrs',
    icon: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704906704/Project/clock_2838794_2clock_aa9old.svg',
  },
  {
    id: '2',
    Subtitle: 'business analyst training and place...',
    st1: 'USA',
    st2: 'business analyst',
    icon: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704906711/Project/graph_8191876_1Graph_dflijo.svg',
  },
  {
    id: '3',
    Subtitle: 'Android training demo @29th feb',
    st1: 'fee : $ 300',
    st2: 'duration : 30 hrs',
    icon: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704906704/Project/clock_2838794_2clock_aa9old.svg',
  },
  {
    id: '4',
    Subtitle: 'business analyst training and place...',
    st1: 'USA',
    st2: 'business analyst',
    icon: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704906711/Project/graph_8191876_1Graph_dflijo.svg',
  },
  {
    id: '5',
    Subtitle: 'Android training demo @29th feb',
    st1: 'fee : $ 300',
    st2: 'duration : 30 hrs',
    icon: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704906704/Project/clock_2838794_2clock_aa9old.svg',
  },
  {
    id: '6',
    Subtitle: 'business analyst training and place...',
    st1: 'USA',
    st2: 'business analyst',
    icon: 'https://res.cloudinary.com/dbomut0aw/image/upload/v1704906711/Project/graph_8191876_1Graph_dflijo.svg',
  },  
]

const RecentItem = (props) => {
  const {Title} = props
  return(
    <div className = "RecentItem">
      <div className = "RecentItem-title">
        {Title}
      </div>
      <div>
        {SubItems.map((item) => (
          <RecentSubItem
            key={item.id}
            Subtitle={item.Subtitle}
            st1={item.st1}
            st2={item.st2}
            icon={item.icon}
          />
        ))}
      </div>
      <div className = "tc">
        <p>View All</p>
      </div>
    </div>
  )
}

export default RecentItem