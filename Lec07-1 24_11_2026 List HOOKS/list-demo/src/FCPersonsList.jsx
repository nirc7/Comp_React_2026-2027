

export default function FCPersonsList(props) {

    let namesStr = props.names.map((name, ind) =>
        <li key={ind} className="list-group-item">{name}</li>
    );

    return (
        <div style={{ border: '2px green dashed', margin: 10, padding: 10 }}>
            <h3>Presons List:</h3>
            <ul className="list-group">
                {namesStr}
            </ul>
        </div>
    )
}
