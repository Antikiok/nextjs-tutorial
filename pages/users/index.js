import Link from 'next/link';
import { useState } from 'react';

import style from './users.module.scss';

export const getStaticProps = async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/users');
 const tovariToRender = await response.json();

 return {
  props: {
   tovariToRender
  }
 };
};
const Users = ({ tovariToRender }) => {
 console.log(tovariToRender);
 const [users, setUsers] = useState([
  { id: 1, name: 'Petya' },
  { id: 2, name: 'Vasya' }
 ]);
 return (
  <div>
   <Link href="/">
    <a className={style.home}>Home</a>
   </Link>
   <Link href="/users">
    <a>Users</a>
   </Link>
   <h1>Users List</h1>
   {users.map((user) => (
    <li key={user.id}>
     <Link href={`/users/${user.id}`}>
      <a>{user.name}</a>
     </Link>
    </li>
   ))}
  </div>
 );
};

export default Users;
