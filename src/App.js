import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import './App.scss';
import './App.css';
import { Provider } from 'react-redux'
import configureStore from './redux/store';

const store = configureStore()

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
    loader: () => import('./layout/DefaultLayout'),
    loading
});

// Pages
const Login = Loadable({
    loader: () => import('./view/Login'),
    loading
});

const Register = Loadable({
    loader: () => import('./view/Register'),
    loading
});

const Page404 = Loadable({
    loader: () => import('./view/Page404'),
    loading
});

const Page500 = Loadable({
    loader: () => import('./view/Page500'),
    loading
});

const MailEditor = Loadable({
    loader: () => import('./view/MailEditor'),
    loading
})
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/mail" name="Mail Editor" component={MailEditor} />
                        <Route exact path="/login" name="Login Page" component={Login} />
                        <Route exact path="/register" name="Register Page" component={Register} />
                        <Route exact path="/404" name="Page 404" component={Page404} />
                        <Route exact path="/500" name="Page 500" component={Page500} />
                        <Route path="/" name="Home" component={DefaultLayout} />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
