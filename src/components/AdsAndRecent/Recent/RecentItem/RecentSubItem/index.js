import './index.css'

const RecentSubItem = (props) => {
  const {Subtitle, st1, st2, icon} = props
  return(
    <div className = "RecentSubItem">
      <div className = "RecentSubItem1">
          <div className = "RecentSubItem-left">
            <p className = "Subtitle">{Subtitle}</p>
            <div className = "RecentSubItem-left-div">
                <p className = "st1">{st1}</p>
                <div className = "side-divv">
                  <img src = {icon} alt = "icon" />
                  <p className = "st1">{st2}</p>
                </div>
            </div>
          </div>
          <div className = "RecentSubItem-right-div">
            <button className="ApplyButton">Apply</button>
          </div>
      </div>
    </div>
  )
}

export default RecentSubItem