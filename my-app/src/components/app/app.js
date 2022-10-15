import React from 'react';
import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import css from './app.module.css';
import mock from '../../server-response-mock'

function App() {
    const isLogged = mock.activeUserId != null;
    return (
        <div className={css.app}>
            <Header isLogged={isLogged}/>
            <Main />
            <Footer />
        </div>
    );
}

export default App;
