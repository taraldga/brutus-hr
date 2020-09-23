import React, { useEffect, useState } from 'react';
import './App.css';
import AddUserModal from './Components/AddUserModal';
import QueryInput from './Components/QueryInput';
import UserTable from './Components/UserTable'
import User from './Models/User'

function App() {

  const [users, setUsers] = useState<User[] | null>(null)
  const [modalOpen, setModalOpen] = useState(false);

  const fetchUsers = async (query?: string) => {
    let url = 'http://localhost:3600/employee'
    if(query) {
      url = `${url}?query=${query}`
    }
    const result = await fetch(url);
    console.log(result)
    const newUsers = await result.json()
    setUsers(newUsers);
  }

  const onModalClosing = () => {
    setModalOpen(false);
    fetchUsers();
  }

  const onSubmitQuery = (nextQuery: string) => {
    fetchUsers(nextQuery)
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <div className="app">
      <h1>Brutus Employee Application</h1>
      <QueryInput submitQuery={(nextQuery) => {onSubmitQuery(nextQuery)}}/>
      {users && <UserTable users={users} /> }
      <AddUserModal isOpen={modalOpen} onClose={() => onModalClosing()} />
      <button className="btn" onClick={() => setModalOpen(true)}>Add user</button>
    </div>
  );
}

export default App;
