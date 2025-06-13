import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Container() {



    let [task, setTask] = useState([{ "id": uuidv4(), "task": "sample task" }]);
    
    let [taskDone, setTaskDone] = useState([{ "id": uuidv4(), "task": "task completed" }]);
    
    let [value, setValue] = useState("");
    // flag->true: task yet to be done will be showed; fasle: task completed will be shown  
    let [flag, setFlag] = useState(true);
    // editing id
    let [editingId, setEditingId] = useState();

    
    useEffect(()=>{
        // console.log("stupid")
        setTask(JSON.parse(localStorage.getItem("localTask")));
        setTaskDone(JSON.parse(localStorage.getItem("localTaskDone")));
    },[])
    
    useEffect(()=>{
        // console.log("task is changed")
        localStorage.setItem("localTask",JSON.stringify(task));
    },[task])

    useEffect(()=>{
        // console.log("taskDOne is changed")
        localStorage.setItem("localTaskDone",JSON.stringify(taskDone));
    },[taskDone])
    let handleChange = (e) => {
        setValue(e.target.value);
    }

    let handleSubmit = () => {
        if(value.trim()==="") return;
        if (flag) {
            if (editingId) {
                console.log("we are editing");
                setTask((prev) => (
                    prev.map((todo) => todo.id === editingId ? { "id": todo.id, "task": value } : { "id": todo.id, "task": todo.task })
                ))
                // localStorage.setItem("localTask",JSON.stringify(task));

                let li = document.getElementById(`${editingId}`).closest("li");
                li.classList.remove("bg-red-400");
                li.classList.add("hover:bg-purple-300");
                setEditingId(null);
            }
            else {
                console.log("we are adding new task");
                setTask((prev) => (
                    [...prev, { "id": uuidv4(), "task": value }]
                ));
            }
        } else {
            if (editingId) {
                console.log("we are editing");
                setTaskDone((prev) => (
                    prev.map((todo) => todo.id === editingId ? { "id": todo.id, "task": value } : { "id": todo.id, "task": todo.task })
                ))
                // localStorage.setItem("localTaskDone",JSON.stringify(taskDone));
                setF(true);
                let li = document.getElementById(`${editingId}`).closest("li");
                li.classList.remove("bg-red-400");
                li.classList.add("hover:bg-purple-300");
                setEditingId(null);
            }
            else {
                console.log("we are adding new task");
                setTask((prev) => (
                    [...prev, { "id": uuidv4(), "task": value }]
                ));
            }
        }

        setValue("");
        // console.log(list);
    }

    // completing tasks
    let finish = (e) => {
        if (flag) {
            // console.log(e.target.id);
            let tempTask = task.find(t => t.id === e.target.id);
            setTaskDone((prev) => (
                [...prev, tempTask]
            ));
            setTask((prev) => (
                prev.filter(t => t.id != e.target.id)
            ))
            // localStorage.setItem("localTask",JSON.stringify(task));
            // console.log("task completed list=", taskDone);
        }
    }

    // completed task
    let compeletedTasks = () => {
        // console.log("yes")
        setFlag(!flag);
    }

    //delete a task
    function del(key) {
        console.log(key);
        if (flag) {
            setTask((prev) => (
                prev.filter(t => t.id != key)
            ))
        }

        else {
            setTaskDone((prev) => (
                prev.filter(t => t.id != key)
            ))
        }
    }


    function editTask(e, id, task) {
        // console.log("id;",id)
        // del(id);
        let li = e.target.closest("li");
        li.classList.remove("hover:bg-purple-300")
        li.classList.add("bg-red-400");
        setEditingId(id);
        setValue(task);
    }

    // lists
    let list = (arr) => {
        return arr.map((todo) =>
        (<li key={todo.id} className="flex justify-between text-sm w-full px-2 py-1 rounded-lg hover:bg-purple-300 ">
            <div className="inputParent flex gap-3 items-center max-w-[85%] ">
                <input type="checkbox" onClick={finish} id={todo.id}></input>
                <div className={flag ? "break-words w-full  " : "break-words w-full line-through "}>  {todo.task} </div>
            </div>
            <div className="buttons flex items-center justify-center gap-2">
                {/* edit */}
                <i onClick={(e) => { editTask(e, todo.id, todo.task); }} className="fa-solid fa-pen-to-square p-1 hover:bg-purple-700 hover:text-white hover:rounded-md"></i>
                {/* delete */}
                <i onClick={() => { del(todo.id) }} className="fa-solid fa-trash p-1 hover:bg-purple-700 hover:text-white hover:rounded-md "></i>
            </div>
        </li>)
        );
    }


    return (
        <>
            <div className="bg-pink-100 pt-5 flex-1">
                <div className=" w-[90%]  sm:w-4/5 lg:w-3/5 m-auto xl:w-2/5 bg-purple-200  h-[90%] rounded-xl p-4 ">
                    <h1 className="text-xl font-bold text-center" >iTask - Manage your todos at one place</h1>
                    <h2 className="font-bold text-lg mt-4">Add a Todo</h2>
                    {/* input task */}
                    <div className="w-full my-3 max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:items-center">
                        <input type="text" value={value} onChange={handleChange} className="w-[85%] max-sm:w-full h-8 mr-2 rounded-full outline-none p-3"></input>
                        <button onClick={handleSubmit} className="bg-purple-600 font-semibold text-white w-[10%] max-sm:w-2/4 h-8 rounded-3xl">Save</button>
                    </div>
                    {/* show finished task */}
                    <div className="my-3">
                        <input type="checkbox" onClick={compeletedTasks} className="mr-2"></input>
                        <span className="font-light">Show Finished</span>
                    </div>
                    <div className="m-auto my-2 w-[90%]">
                        <hr className="border-gray-400"></hr>
                    </div>

                    {/* all task */}
                    <h2 className="font-bold text-lg">Your Todos</h2>
                    <div>
                        <ul id="allTasks" className="p-1">{flag && list(task)} {!flag && list(taskDone)}</ul>

                    </div>

                    {/* show edit box */}

                </div>
            </div>
        </>
    )
}