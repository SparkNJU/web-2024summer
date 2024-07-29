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
        <div>  
            <form className="new-form" onSubmit={handleSubmit}>  
                <div align="center">  
                    <label htmlFor="item">Enter a new task</label>  
                    <hr />  
                    <input  
                        type="text"  
                        id="item"  
                        value={newItem}  
                        onChange={(e) => setNewItem(e.target.value)}  
                    />  
                    <button className="btn" type="submit">Add</button> {/* 明确指定按钮类型为 submit */}  
                </div>  
            </form>  
        </div>  
    );  
}