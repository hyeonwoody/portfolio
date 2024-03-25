import React, { useRef,useMemo, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import {User} from '../utils/data/User';
import Introduction from './Introduction';

const initialState : User[] = [
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com',
    active : false
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com',
    active : false
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com',
    active : true
  }
];

function countActiveUsers(users : User[]) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function Root() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = (e :any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [inputUsers , setUsers] = useState<User[]>(initialState);

  const nextId = useRef(4);
  const count = useMemo(()=> countActiveUsers(inputUsers), [inputUsers]);
  let aaa = 4;
  console.log("useRef : ",nextId.current);
  console.log("aaa : ", aaa);
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username : username,
      email : email,
      active : true
    };
    setUsers (
      [...inputUsers, user]
    );
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
    aaa+=1;
  };
  return (
      <Introduction/>
  );
}

export default Root;