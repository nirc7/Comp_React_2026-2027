

export default function FCInputs(props) {

    let name = ' ';
    const cngName = (e) => {
        name = e.target.value;
    }


    const btnAddPerson = () => {
        props.sendName(name);
    }

    return (
        <div style={{ border: '2px red solid', margin: 10, padding: 10 }}>
            <h3>Inputs</h3>
            NAME: <input type="text" 
            placeholder="please enter ur name..."
            onChange={cngName} /> <br />
            <button onClick={btnAddPerson} >Add Person</button>
        </div>
    )
}
