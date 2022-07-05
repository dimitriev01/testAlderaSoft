import React, { useEffect, useMemo, useState } from 'react';
import QuoteOfDay from './components/UI/quote/QuoteOfDay';
import Tasks from './components/UI/tasks/Tasks';
import TaskForm from './components/UI/TaskForm/TaskForm';
import './styles/App.scss';
import TaskFilter from './components/UI/TaskFilter/TaskFilter';
import ModalTask from './components/UI/ModalTask/ModalTask';
import Task from './components/UI/task/Task';

function App() {
  let [today, setToday] = useState(new Date())
  let [tomorrow, setTomorrow] = useState(new Date(new Date().setDate(today.getDate() + 1)))

  const [tasks, setTasks] = useState([
    {
      id: 1,
      nameTask: 'Продукты',
      descriptionTask: 'Масло, молоко, хлеб',
      tagTask: 'Купить',
      date: today,
      period: tomorrow,
      status: 'Новая',
      edit: false
    },
    {
      id: 2,
      nameTask: 'д/з',
      descriptionTask: 'Сделать д/з',
      tagTask: 'Работа',
      date: today,
      period: tomorrow,
      status: 'Новая',
      edit: false
    },
    {
      id: 3,
      nameTask: 'Перестановка',
      descriptionTask: 'Помочь бабушке сделать перестановку',
      tagTask: 'Семья',
      date: today,
      period: tomorrow,
      status: 'Новая',
      edit: false
    }
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);

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

  function getTasks(tasks) {
    setTasks(tasks)
  }

  function getTask(task) {
    return task;
  }

  function getNum(num) {
    return num;
  }

  useMemo(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="App">
      <div className='container'>
        <QuoteOfDay />

        <TaskForm
          createTask={createTask}
        />

        <TaskFilter
          filter={filter}
          setFilter={setFilter}
        />

        <Tasks
          num={getNum}
          task={getTask}
          setModal={setModal}
          setTasks={getTasks}
          remove={removeTask}
          tasks={sortedAndSearchedTasks}
        />

        <ModalTask
          num={getNum}
          task={getTask}
          visible={modal}
          setVisible={setModal}
        />

      </div>
    </div>
  );
}

export default App;
