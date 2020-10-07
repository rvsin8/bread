import React from 'react';
import UserSearchContainer from '../search/user_search_container';
import "./event_form.css";

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      attendees: [],
      errors: []
    };

    this.handleAddAttendee = this.handleAddAttendee.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRemoveAttendee = this.handleRemoveAttendee.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddAttendee(e) {
    let newState = this.state.attendees;
    newState = newState.concat(e._dispatchInstances.key);
    this.setState({
      attendees: newState,
      errors: [],
    });
  }

  handleRemoveAttendee(e) {
    let key = e._dispatchInstances.key;
    let index = this.state.attendees.indexOf(key);
    let newState = this.state.attendees;
    newState.splice(index, 1);
    this.setState({
      attendees: newState
    });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
      e.preventDefault();
      if (this.state.attendees.length < 1) {
        this.setState({errors: ['You must include at least one user! Use the search bar to find users']});
      } else if (this.state.name === '') {
        this.setState({errors: ['You must give your event a name!']});
      } else {
        let attendeesWithCreator = this.state.attendees.concat(this.props.currentUserId);
        let event = {
            name: this.state.name,
            attendees: attendeesWithCreator,
        };

        this.props.createEvent(event);
    }
  }

  render() {
    let attendeesList = '';
    if (this.state.attendees.length > 0) {
      attendeesList = Object.values(this.props.users).filter((user) =>
        this.state.attendees.includes(user._id)
      );
      attendeesList = attendeesList.map((user) => {
        return (
          <div
            key={user._id}
            onClick={this.handleRemoveAttendee}
            className="user-search-result-item"
          >
            {user.username}
            <i className="fas fa-user-times"></i>
          </div>
        );
      });
    } else {
        attendeesList = 
            <div
            className="user-search-result-item"
            >
            No Users Added Yet!
            </div>;
    }

    let errorsList = '';
    let errorsUl = '';
    if (this.state.errors.length > 0) {
        errorsList = this.state.errors.map(error => {
            return <p className="event-form-error-li">!! {error} !!</p>
        })
        errorsUl = <div className="event-form-error-ul">{errorsList}</div>
    }

    return (
      <div id="event-form-container">
        <h1>Create Event</h1>
        <div id="form-items-container">
          <UserSearchContainer
            handleAddAttendee={this.handleAddAttendee}
            attendees={this.state.attendees}
          />
          <div className="event-form-details-container">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
                placeholder="Event Name"
              />
              <button type="submit">Create Event</button>
            </form>
            <div className="user-search-results-container">
                {attendeesList}
            </div>
            {errorsUl}
          </div>
        </div>
      </div>
    );
  }
}

export default EventForm;