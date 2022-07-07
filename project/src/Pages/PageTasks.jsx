import React, { useMemo, useState } from 'react';
import ModalTask from '../components/UI/ModalTask/ModalTask';
import TaskFilter from '../components/UI/TaskFilter/TaskFilter';
import TaskForm from '../components/UI/TaskForm/TaskForm';
import Tasks from '../components/UI/tasks/Tasks';

const PageTasks = () => {

  const today = new Date();
  const tomorrow = new Date(new Date().setDate(today.getDate() + 1));

  const [tasks, setTasks] = useState([
    {
      id: 1,
      nameTask: 'Продукты',
      descriptionTask: 'Масло',
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

  const sortedTasks = useMemo(() => {
    if (filter.sort)
      return [...tasks].sort((a, b) => String(a[filter.sort]).localeCompare(String(b[filter.sort])))
    else
      return tasks
  }, [filter.sort, tasks])

  const sortedAndSearchedTasks = useMemo(() => {
    return sortedTasks.filter(
      task =>
        task.tagTask.toLowerCase().includes(filter.query.toLowerCase()) || task.status.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedTasks])

  function createTask(task) {
    setTasks([...tasks, task])
  }

  function removeTask(task) {
    setTasks(tasks.filter(p => p.id !== task.id))
  }

  function changeTask(task){
    const index = tasks.findIndex(tsk => {
      return tsk.id === task.id
    })
    setTasks(Object.assign(tasks, { [index]: task }))
  }

  useMemo(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [taskModal, setTaskModal] = useState('')

  return (
    <>
      <TaskForm
        createTask={createTask}
      />

      <TaskFilter
        filter={filter}
        setFilter={setFilter}
      />

      <Tasks
        setModal={setModal}
        setTasks={changeTask}
        remove={removeTask}
        tasks={sortedAndSearchedTasks}
      />

      <ModalTask
        visible={modal}
        setVisible={setModal}

        taskModal={taskModal}
        setTasks={changeTask}
      />
    </>
  );
};

export default PageTasks;