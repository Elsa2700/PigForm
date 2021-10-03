import React from 'react';
import HomePage from './component/HomePage';
import Result from './component/Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router basename="/build/index.html">
            <div>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/Result' component={Result} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;