

export default function FCResult(props) {
  console.log('fcResult');
  
  return (
    <div style={{
      border: '2px dashed blue',
      margin: 10,
      padding: 10
    }}>
      <h4>Result</h4>
      = {props.res}
    </div>
  )
}
