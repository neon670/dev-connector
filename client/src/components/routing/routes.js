import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/register';
import Login from '../auth/login';
import ForgotPassword from '../auth/forgot-password';
import Alert from '../layout/alert';
import Dashboard from '../dashboard/dashboard';
import CreateProfile from '../profile-forms/create-profile';
import EditProfile from '../profile-forms/edit-profile';
import AddExperience from '../profile-forms/add-experience';
import AddEducation from '../profile-forms/add-education';
import Profiles from '../profiles/profiles';
import Profile from '../profile/profile';
import Posts from '../posts/posts';
import Post from '../post/post';
import NotFound from '../layout/notFound';
import PrivateRoute from '../routing/privateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/forgot-password' component={ForgotPassword} />
        <Route exact path='/profiles' component={Profiles} />
        <PrivateRoute exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;