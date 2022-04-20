import React from 'react';
import Header from './components/header/index'
import Footer from './components/footer/index'
import css from './App.module.css'
import Main from './components/main';
import AddListForm from './components/addListForm/addListForm';
import mock from './server-response-mock';

function App() {
    const {activeUserId, users, todos} = mock
    const isLogged = activeUserId !== null
    const loggedUser = users.find(user => user.id === activeUserId)
    return (
        <div className={css.app}>
            <Header isLogged={isLogged} />
            <AddListForm />
            <Main isLogged={isLogged} loggedUser={loggedUser} todos={todos}/>
            <Footer />
        </div>
    )
}

export default App