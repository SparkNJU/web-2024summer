import { useState } from "react";

export default function NewTodo({ addTodos }) {
    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem.trim()) {
            alert('待办事项标题不能为空');
            return;
        }
        addTodos(newItem);
        setNewItem(""); // 清空输入框
    };

    return (
        <form className="flex flex-col items-center mt-8" onSubmit={handleSubmit}>
            <label htmlFor="item" className="text-lg font-semibold mb-2">Enter a new task</label>
            <hr className="w-3/4 mb-4"/>
            <input
                type="text"
                id="item"
                className="border border-gray-300 rounded px-3 py-2 w-3/4 text-lg"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Type something..."
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4" type="submit">Add</button>
        </form>
    );
}
