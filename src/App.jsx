import React from 'react';
import ButtonCount from './ButtonCount';
import ButtonToggle from './ToggleMessaje';
import ShoppingCart from './shoppingCart';
import ButtonStyleToggle from './ToggleStyle';
import FormApp from './RegistrationForm';
import TextButton from './TextToggle';
import AppComment from './CommentForm';
import ColorApp from './ColorPicker';
import AppItem from './ItemList';
import TaskApp from './TasksList';
import MoviesApp from './MovieList';
import UserApp from './UserList';
import AppForm from './UserForm';
import AppList from './TodoList';
import AppPeople from './PeopleList';

const App = () => {
  return (
    <div>
      <ShoppingCart />
      <ButtonCount />
      <ButtonToggle />
      <ButtonStyleToggle />
      <FormApp />
      <TextButton/>
      <AppComment/>
      <ColorApp/>
      <AppItem/>
      <TaskApp/>
      <MoviesApp/>
      <UserApp/>
      <AppForm/>
      <AppList/>
      <AppPeople/>
    </div>
  );
};

export default App;
