import './index.css'

import RecentItem from './RecentItem'

const SubItem1 = [
  {
    id: '1',
    Title: 'Recent Trainings',
  },
  {
    id: '2',
    Title: 'OPT - CPT Hiring',
  },
  {
    id: '3',
    Title: 'Empanelment & Sponsorship',
  },
  {
    id: '4',
    Title: 'Training Enquiries',
  },
  {
    id: '5',
    Title: 'Project Support Enquiries',
  },
  {
    id: '6',
    Title: 'Legal & Attorney Queries',
  },
]

const Recents = (props) => {
  return(
    <div className = "Recents">
      {SubItem1.map((item) => (
          <RecentItem
            key={item.id}
            Title={item.Title}
          />
        ))}
    </div>
  )
}

export default Recents