import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Components/login/Login';
import Dashboard from './Components/dashboard/Dashboard';
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute';
import Initial from './Components/initial/Initial';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path='/' element={<Initial />} />
          <Route index path='/login' element={<Login />} />
          <Route path='/home' element={<ProtectedRoute />}>
            <Route exact path='/home' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    urlState: state.app.API_URL
  }
}

export default connect(mapStateToProps)(App);
