import {format} from 'date-fns'
import './index.css'

const star =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
const fill =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

const AppointmentItem = props => {
  const {list, onFill} = props
  const {title, date, isFill, id} = list
  const imgUrl = isFill ? fill : star

  const day = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const update = () => {
    onFill(id)
  }

  return (
    <li className="item">
      <div className="container">
        <p className="name">{title}</p>
        <button
          type="button"
          data-testid="star"
          onClick={update}
          className="fill-button"
        >
          <img src={imgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {day}</p>
    </li>
  )
}

export default AppointmentItem
