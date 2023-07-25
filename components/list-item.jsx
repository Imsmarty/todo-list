import { useState } from "react";
export default function ListItem({
    itemName,
    onRemove,
    onChange
}) {
    const [name, setName] = useState(itemName);
    const [showEditName, setShowEditName] = useState(false);

    return (
        <div className="listItem">
            <input type="checkbox"/>
            {
                showEditName
                ? <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                : itemName
            }
            <button onClick={() => {setShowEditName(!showEditName); onChange(name)}}>{showEditName ? "done" : "edit"}</button>
            <button onClick={onRemove}>remove</button>
        </div>
    );
};