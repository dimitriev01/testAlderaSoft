import React, { useMemo, useState } from 'react';
import QuoteOfDay from './components/UI/quote/QuoteOfDay';
import Tasks from './components/UI/tasks/Tasks';
import TaskForm from './components/UI/TaskForm/TaskForm';
import './styles/App.scss';
import TaskFilter from './components/UI/TaskFilter/TaskFilter';

function App() {
  let [today, setToday] = useState(new Date())
  let [tomorrow, setTomorrow] = useState(new Date().setDate(today.getDate() + 1))
  const [tasks, setTasks] = useState([
    { id: 1, nameTask: 'Продукты', descriptionTask: 'Масло, молоко, хлеб', tagTask: 'Купить', date: Date.now(), period: tomorrow, status: false },
    { id: 2, nameTask: 'д/з', descriptionTask: 'Сделать д/з', tagTask: 'Работа', date: Date.now(), period: tomorrow, status: false },
    { id: 3, nameTask: 'Перестановка', descriptionTask: 'Помочь бабушке сделать перестановку', tagTask: 'Семья', date: Date.now(), period: tomorrow, status: false }
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })

  function createTask(task) {
    setTasks([...tasks, task])
  }

  function removeTask(task) {
    setTasks(tasks.filter(p => p.id !== task.id))
  }

  const sortedTasks = useMemo(() => {
    if (filter.sort)
      return [...tasks].sort((a, b) => String(a[filter.sort]).localeCompare(String(b[filter.sort])))
    else
      return tasks
  }, [filter.sort, tasks])

  const sortedAndSearchedTasks = useMemo(() => {
    return sortedTasks.filter(
      task => task.tagTask.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedTasks])

  return (
    <div className="App">
      <div className='container'> 
        <QuoteOfDay/> 

        <TaskForm
          createTask={createTask}
        />

        <TaskFilter
          filter={filter}
          setFilter={setFilter}
        />

        <Tasks 
          remove={removeTask} 
          tasks={sortedAndSearchedTasks} 
        />
      </div>
    </div>
  );
}

export default App;
