export default function Student(props) {
    return (
    <div className = "Student-data">
      <p> First name: {props.firstName}</p>
      <p> Last name: {props.lastName}</p>
      <p> Student ID: {props.uuid}</p>
      </div>
    )
  }