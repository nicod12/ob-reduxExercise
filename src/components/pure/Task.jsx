import React,{ useReducer, createContext, useState, useContext } from 'react'


// Action Types:
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const DELETE_TODO = 'DELETE_TODO';

const myContext = React.createContext(null);




const Task = () => {
    // Initial State
    let initialState = {
        todos: []
    };


    // Reducer
    const taskReducer = (state, action) =>{
        switch (action.type) {
            case ADD_TODO:
                return {
                    ...state,
                    todos: [...state.todos, action.payload],
                };
            case DELETE_TODO:
                return {
                    ...state,
                    todos: [...state.todos.filter(item => item.id !== action.payload)]
                };    
            case TOGGLE_TODO:
                const updateTodo = state.map((todo) => 
                (todo.id === action.payload.id)
                ?
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                :
                    todo
                )
                return updateTodo;
                default:
                    return state;
        }
    }


    const [state, dispatch] = useReducer(taskReducer, initialState);
    const [text, setText] = useState("");
   

    const addTodo = () =>{
        if(!text.trim() === true){
            return 
        }
        
        dispatch({
            type: ADD_TODO,
            payload: {
              id: Math.random(),
              text,
              isCompleted: false
            }
          });
          setText("");
    }

    const handleDelete = (id) => {
        dispatch({ type: DELETE_TODO, payload: id });
    };

    // const changeState = (updateTodo) => {
    //         dispatch({
    //             type: TOGGLE_TODO,
    //             payload: updateTodo
    //         })   
    // }

    


    
    const ListTodo = () => {
        const state = useContext(myContext);

        if(Object.keys(state.todos).length === 0 ) {
            return <p>Add  new Todo</p>
        } else {
            
            return state.todos.map(item => (
                    <li 
                        key={item.id}
                    >

                            {item.text} 
                            <button onClick={() => handleDelete(item.id)}>remove</button>
                    </li>
            ))
        }

    }

  return (
    <myContext.Provider value={state}>
    <div>
        <input
            value={text}
            onChange={e => setText(e.target.value)}  
            type='text' 
            placeholder='Input Task'
            />
        <button
          onClick={addTodo}  
        >
            ADD
        </button>
        <ul>
            <ListTodo/>
        </ul>
    </div>
    </myContext.Provider>
  )
}

export default Task
