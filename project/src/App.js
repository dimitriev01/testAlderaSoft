import React, { useEffect, useRef, useState } from 'react';
import MyBtn from './components/UI/button/MyBtn';
import MyInput from './components/UI/input/MyInput'
import QuoteOfDay from './components/UI/quote/QuoteOfDay';
import Tasks from './components/UI/tasks/Tasks';
import Task from './components/UI/task/Task';
import './styles/App.scss';

function App() {
  const [error, setError] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, nameTask: 'Продукты', descriptionTask: 'Масло, молоко, хлеб', tagTask: 'Купить' },
    { id: 2, nameTask: 'д/з', descriptionTask: 'Сделать д/з', tagTask: 'Работа' },
    { id: 3, nameTask: 'Перестановка', descriptionTask: 'Помочь бабушке сделать перестановку', tagTask: 'Семья' }
  ])
  const [nameTask, setNameTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')
  const [tagTask, setTagTask] = useState('')

  const nameTaskRef = useRef();
  const descriptionTaskRef = useRef();
  const tagTaskRef = useRef();

  function addTask(e) {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      nameTask,
      descriptionTask,
      tagTask
    }
    setTasks([...tasks, newTask])

    setNameTask('')
    setTagTask('')
    setDescriptionTask('')
  }

  function checkError(error) {
    setError(error)
  }

  return (
    <div className="App">
      <div className='container'>
        {
          error ?
            'Невозможно получить цитату дня. Сервер не отвечает'
            :
            <QuoteOfDay create={checkError} />
        }

        <div className='tasks'>
        <form className='tasks__form'>
            <MyInput
              ref={nameTaskRef}
              value={nameTask}
              onChange={e => setNameTask(e.target.value)}
              type="text"
              name="nameTask"
              placeholder='Введите название'
            />
            <MyInput
              ref={descriptionTaskRef}
              value={descriptionTask}
              onChange={e => setDescriptionTask(e.target.value)}
              type="text"
              name="description"
              placeholder='Введите описание'
            />
            <MyInput
              ref={tagTaskRef}
              value={tagTask}
              onChange={e => setTagTask(e.target.value)}
              type="text"
              name="tag"
              placeholder='Введите тэг'
            />
          </form>
          <MyBtn type='submit' onClick={addTask}>Добавить задачу</MyBtn>
          <div className='tasks__title'>
            Ваши задачи:
          </div>
          {
            tasks.length ?
              <ul className='tasks__elems'>
                  {
                    tasks.map((task,i) =>
                      <Task num={i+1} key={task.id} task={task}/>
                  )}
              </ul>
              :
              <div className='tasks__check-empty'>Нет задач!<i class="fa-solid fa-face-sunglasses"></i></div>
          }

        </div>

      </div>
    </div>
  );
}

export default App;
