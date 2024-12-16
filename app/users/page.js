import Link from 'next/link';
import React from 'react';

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return (
    <>
      <h1>USERS ALL</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {users.map(ele => {
        return (
          <div key={ele.id}>
            <h3>{ele.name}</h3>
          </div>
        );
      })}
      <br />
      <Link href='/'>HOME</Link>
    </>
  );
};

export default page;
