import React, { useEffect, useState } from 'react';
import './App.css';
import AddUserModal from './Components/AddUserModal';
import UserTable from './Components/UserTable'
import User from './Models/User'

function App() {

  const [users, setUsers] = useState<User[] | null>(null)
  const [modalOpen, setModalOpen] = useState(false);

  const fetchUsers = async () => {
    const result = await fetch('http://localhost:3600/employee');
    const newUsers = await result.json()
    setUsers(newUsers);
  }

  const onModalClosing = () => {
    setModalOpen(false);
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <div className="app">
      <h1>Brutus Employee Application</h1>
      {users && <UserTable users={users} /> }
      <AddUserModal isOpen={modalOpen} onClose={() => onModalClosing()} />
      <button className="btn" onClick={() => setModalOpen(true)}>Add user</button>
    </div>
  );
}

export default App;
