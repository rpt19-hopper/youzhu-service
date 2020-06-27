/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useState } from 'react';
import Axios from 'axios';

const User = (props) => {
  const server = 'http://18.223.151.174:1234';
  const [users, setUsers] = useState([]);

  // const getUser = (userId) => {
  //   axios.get(`/users/${userId}`).then((result) => {
  //     console.log(result.data)
  //     setUsers(result.data)
  //   });
  // };

  useLayoutEffect(() => {
    Axios.get(`${server}/users/${props.userId}`).then((result) => {
      setUsers(result.data);
    });
  }, []);

  return (
    // want to use val.avatar but lorem picsum caches images
    <div>
      {users.map((val) => (
        <div key={val.id} className="user wt-display-flex-xs wt-align-items-center wt-mb-xs-1">
          <img alt={val.username} src={`https://picsum.photos/id/${Math.floor((Math.random() * 100) + 1)}/75/75.jpg`} />
          <div key={val.id} className="username wt-text-gray">{val.username}</div>
        </div>
      ))}
    </div>
  );
};

export default User;
