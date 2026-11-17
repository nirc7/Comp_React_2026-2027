


export default function FCInputs(props) {

  console.log('fcInpouts');
  

  let num1 = 0;
  let num2 = 0;

  const cngNum1 = (e) => {
    num1 = Number(e.target.value);
  }

  const cngNum2 = (e) => {
    num2 = Number(e.target.value);
  }

  const btnAdd = () => {
    props.sendRes(num1 + num2);
  }

  return (
    <div style={{ border: '2px dashed green', margin: 10, padding: 10 }}>
      <h4>Inputs</h4>
      num1 : <input type="text" onChange={cngNum1} />  <br />
      num2 : <input type="text" onChange={cngNum2} />  <br />
      <button onClick={btnAdd} >+</button>
    </div>
  )
}
