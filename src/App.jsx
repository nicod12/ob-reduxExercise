import TodoContainer from './components/containers/TodoContainer'
import './App.css'
import TodoFormContainer from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'
import Task from './components/pure/Task'

function App() {


  return (
    <div className="App">
      {/* <TodoContainer />
      <TodoFormContainer />
      <FilterOptions /> */}
      <Task />
    </div>
  )
}

export default App
