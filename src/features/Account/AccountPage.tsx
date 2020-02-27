/*
    Baseramp Project Manager - An open source Project Management software built
    as a Single Page Application (SPA) and Progressive Web Application (PWA) using
    Typescript, React, and an extensible SQL database model.

    Copyright (C) 2019-2020  William R. Lotherington, III

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rootReducer';
import { authLogout } from './AccountThunks';
import { useHistory } from 'react-router-dom';
import { Login } from './Login';
import { NewUser } from './NewUser';
import { usePrevious } from '../../utils/utils';

const useStyles = makeStyles(theme => ({
  container: {
    margin: "auto",
    textAlign: "center",
    spacing: "10%",
    paddingBottom: "50px"
  },
  buttons: {
    marginLeft: 20, 
    height: 50, 
    width: 110, 
    lineHeight: "1em"
  }
}));

const initialState = {
  login : "",
  password : "",
  newUserForm : false
}

export type StateType = typeof initialState;

export type Login_OnDone = (newUser:string, newPassword:string) => void;

export const MenuLabel = () => {
  const accountState = useSelector((state:RootState)=>(state.userLogin));
  const priorAccountState : any = usePrevious(accountState);
  const history = useHistory();
  console.log("MenuLabel");
  // Detect new login, moves focus to System Navigator tab...
  if (accountState.user_id && !priorAccountState.user_id)
    history.push("/Navigator"); // good pattern or anti-pattern

  if (accountState.user_id)
    return <>Account<br/>& Log Off</>;
  else
    return <>Account<br/>Log In</>;
}

export const AccountPage = () => {
  const [ state, setState ] = useState(initialState);
  const accountState = useSelector((state:RootState)=>(state.userLogin))
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log('AccountPage');
  if (accountState.user_title)
    return (
      <div className={classes.container}>
        <h2>
          { accountState.user_title + ', you are logged in...' }
        </h2>
        <Button 
          variant='contained' 
          className={classes.buttons}
          onClick={ () => { dispatch(authLogout()); } } >
            Logout
        </Button>        
      </div>
    );
  else if (!state.newUserForm)
    return (
      <div className={classes.container}>
        <h2>Please login or register as a new user...</h2>
        <Login state={state} setState={setState}/> 
      </div>
    );
  else
    return (
      <div className={classes.container}>
        <h2>Register as a new user...</h2>
        <NewUser onDone = { (newUser, newPassword) => {
          setState({...state, login:newUser, password:newPassword, newUserForm:false}) 
        } }/>
      </div>
    );
}

