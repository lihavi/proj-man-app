import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMember } from '../actions/projectActions';

function MemberForm({ projectId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch users from the backend API
    fetch('http://localhost:9292/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMember(projectId, { name, email }));
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Member</h3>
      <label>
        Name:
        <select value={name} onChange={(event) => setName(event.target.value)}>
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <button type="submit">Add Member</button>
    </form>
  );
}

export default MemberForm;
