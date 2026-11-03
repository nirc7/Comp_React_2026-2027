

export default function FCPerson(props) {

  let num = props.id;
  num++;


  function btnAddOne() {
    num++;
    console.log(num);
  }

  function chgNum(e) {
    console.log(e.target.value);
  }

  if (num < 10) {
    return (
      <div> {"<"} 10</div>
    );
  }

  return (
    <div style={{
      border: 'solid black 2px',
      margin: 10,
      padding: props.paddingSize,
      borderRadius: 5
    }}>
      id = {props.id} <br />
      name = {props.name} <br />
      num = {num} <br />
      <button onClick={btnAddOne} >Add One</button> <br />
      <input type="text" onChange={chgNum} />
    </div>
  );
}   