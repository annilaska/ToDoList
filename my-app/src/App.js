import React from 'react';
import Header from './components/header/index'
import Footer from './components/footer/index'
import css from './App.module.css'
import Main from './components/main';
import List from './components/list';
import EmptyState from './components/emptyState/emptyState';
import AddListForm from './components/addListForm/addListForm';

function App() {
    return (
        <div className={css.app}>
            <Header />
            <AddListForm />
            <EmptyState />
            <List />
            <Main />
            <Footer />
        </div>
    )
}

export default App