import React from 'react'
import { Main } from '@aragon/ui';
import UserNameForm from './components/UserNameForm';

function App() {
  return (
    <Main>
      <UserNameForm onSubmit={username => alert(username)} />
    </Main>
  )
}

export default App





