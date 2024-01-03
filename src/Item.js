export function Item({ item, onDeleteItem, onCheckedItem }) {
    return (
        <li>
            <input type='checkbox' onChange={() => onCheckedItem(item.id)} value={item.packed} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.pluralDescription}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>

    );
}
