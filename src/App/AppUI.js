import React from 'react';
import { TodoCounter } from "../TodoCounterr";
import { TodoSearch } from "../TodoSearch";
import {TodoList} from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from '../TodoContext';
import {Modal} from '../modal'
import {TodoForm} from '../TodoForm'

function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
    return(
        <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
          <TodoList>
          {error && <p>Despair. An error has happend</p>}
          {loading && <p>We are loading. Don't despair...</p>}
          {!loading && !searchedTodos.length && <p>¡Create your first ToDo!</p>}
          {searchedTodos.map(todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} 
              onComplete = {()=>completeTodo(todo.text)} 
              onDelete = {()=>deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
            {!!openModal && (
              <Modal>
                  <TodoForm/>
              </Modal> 
            )}
        
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />

    </React.Fragment>

    );
}

export {AppUI};