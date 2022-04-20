import React from 'react';
import EmptyState from '../emptyState/emptyState';
import List from '../list';
import css from './main.module.css'

export default function Main(props) {
    const { isLogged, loggedUser, todos} = props
    const filteredTodos = todos.filter(item => item.userId === loggedUser.id)

    return (
        <main className={css.main}>
            {isLogged ? (
                <>
                    <h2>Welcome, {loggedUser.name}!</h2>
                    <button>Add List</button>
                    <List todos={filteredTodos} />
                </>
            ) : (
                <EmptyState />
            )}
        </main>
    )
}