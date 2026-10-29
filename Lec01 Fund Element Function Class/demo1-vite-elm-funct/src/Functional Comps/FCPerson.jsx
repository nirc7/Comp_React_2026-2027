
export default function FCPerson(props) {

  //props.id = 7;

  let age = props.id * 5;

  return (
    <div>
      id={props.id} <br />
      name={props.name} <br />
      age=  {age}
    </div>
  );
}