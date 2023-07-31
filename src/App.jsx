import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./assets/3.png";
import { adding, clearing, removing } from "./shared/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };

  render_remind = () => {
    const { remind } = this.props;
    return (
      <ul className="list-group">
        {remind.map((e) => {
          return (
            <li key={e.id} className="list-group-item">
              <div>{e.text}</div>
              <div>{moment(new Date(e.date)).fromNow()}</div>
              <div
                className="btn btn-danger"
                onClick={() => this.props.removing(e.id)}
              >
                X
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="App">
        <img src={logo} alt="img" />
        <h2>What should i do?</h2>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="enter anything"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <DatePicker
          className="form-control pointer"
          placeholderText="enter date"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date) => {
            this.setState({ date: date });
          }}
          showTimeSelect
          timeFormat="HH:MM"
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
        {this.render_remind()}
        <button
          className="btn btn-outline-success mb-2"
          onClick={() => this.props.adding(this.state.text, this.state.date)}
        >
          Add reminder
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => this.props.clearing()}
        >
          clear
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    remind: state,
  };
}

export default connect(mapStateToProps, {
  adding,
  removing,
  clearing,
})(App);
