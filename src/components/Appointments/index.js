import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

// Write your code here

class Appointments extends Component {
  state = {titleInput: '', dateInput: '', appointmentList: [], star: false}

  addAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state

    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: dateInput,
      isFill: false,
    }

    this.setState(prevState => ({
      titleInput: '',
      dateInput: '',
      appointmentList: [...prevState.appointmentList, newAppointment],
    }))
  }

  onTitleChange = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onDateChange = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  onFill = id => {
    const {appointmentList} = this.state

    const filtered = appointmentList.map(each => {
      if (each.id === id) {
        return {
          ...each,
          isFill: !each.isFill,
        }
      }
      return each
    })
    this.setState({
      appointmentList: filtered,
    })
  }

  onStarItems = () => {
    this.setState(prevState => ({
      star: !prevState.star,
    }))
  }

  render() {
    const {titleInput, dateInput, appointmentList, star} = this.state

    const starResult = appointmentList.filter(each => each.isFill === star)

    console.log(appointmentList)
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="comment-container">
            <div className="data-container">
              <div className="">
                <form className="form" onSubmit={this.addAppointment}>
                  <h1 className="heading">Add Appointment</h1>
                  <label className="cap " htmlFor="title">
                    TITLE
                  </label>
                  <input
                    type="text"
                    className="name-box box"
                    placeholder="TITLE"
                    onChange={this.onTitleChange}
                    value={titleInput}
                    id="title"
                  />
                  <label className="cap " htmlFor="date">
                    DATE
                  </label>
                  <input
                    type="date"
                    className="date-box box"
                    onChange={this.onDateChange}
                    value={dateInput}
                    id="date"
                  />
                  <button type="submit" className="button">
                    Add
                  </button>
                </form>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="img"
              />
            </div>
            <hr className="line" />
            <div className="button-container">
              <h1 className="head">Appointments</h1>
              <button
                type="button"
                className="star-button"
                onClick={this.onStarItems}
              >
                Starred
              </button>
            </div>
            {star ? (
              <ul className="comment-items">
                {starResult.map(each => (
                  <AppointmentItem
                    list={each}
                    key={each.id}
                    onFill={this.onFill}
                  />
                ))}
              </ul>
            ) : (
              <ul className="comment-items">
                {appointmentList.map(each => (
                  <AppointmentItem
                    list={each}
                    key={each.id}
                    onFill={this.onFill}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
