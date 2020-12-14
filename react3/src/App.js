import React, {Component} from 'react';
import './App.css'
import AllUsers from "./ components/AllUsers";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
}
    from 'react-router-dom';
import AllPosts from "./ components/AllPosts";
import AllComments from "./ components/AllComments";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>users</Link>
                    </div>

                    <div>
                        <Link to={'/posts'}>posts</Link>
                    </div>

                    <div>
                        <Link to={'/comments'}>comments</Link>
                    </div>

                    <div className={'app-route'}>
                        <Switch>
                            <Route path={'/users'}>
                                <AllUsers/>
                            </Route>
                            <Route path={'/posts'}>
                                <AllPosts/>
                            </Route>
                            <Route path={'/comments'}>
                                <AllComments/>
                            </Route>

                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;