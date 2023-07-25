
'use client';
import React from "react";
import ListItem from "./list-item";
import { uniqueId } from "lodash";

export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = props;
        this.addListItem = this.addListItem.bind(this);
        this.removeListItem = this.removeListItem.bind(this);
        this.updateListItem = this.updateListItem.bind(this);
    }

    addListItem() {
        const newListItems = this.state.listItems;
        newListItems.push({ name: "", id: uniqueId()});
        this.setState({
            listItems: newListItems
        });
    }

    removeListItem(id) {
        const newListItems = this.state.listItems.filter(item => item.id !== id);
        this.setState({
            listItems: newListItems
        });
    }

    updateListItem(id, newName) {
        const newListItems = this.state.listItems;
        const index = newListItems.findIndex((item) => (item.id === id));
        newListItems[index].name = newName;
        this.setState({
            listItems: newListItems
        });
    }

    render() {
        return (
        <div className='listContainer'>
        {
            this.state.listItems.length > 0
            && this.state.listItems.map( (item) => {
                const onRemove = () => {
                    this.removeListItem(item.id);
                }
                const onChange = (newName) => {
                    this.updateListItem(item.id, newName);
                }
                return (<ListItem key={item.id} itemName={item.name} onRemove={onRemove} onChange={onChange} />);
            })
        }
        <button onClick={this.addListItem}>+ Add item</button>
        </div>
    );
    }
}