import React from 'react';
import Header from './components/header/index'
import Footer from './components/footer/index'
import css from './App.module.css'
import Main from './components/main';
import List from './components/list';
import EmptyState from './components/emptyState/emptyState';
import AddListForm from './components/addListForm/addListForm';
import mock from './server-response-mock';

function App() {
    const isLogged = mock.activeUserId !== null
    return (
        <div className={css.app}>
            <Header isLogged={isLogged}/>
            <AddListForm />
            <EmptyState />
            <List />
            <Main />
            <Footer />
        </div>
    )
}

export default App