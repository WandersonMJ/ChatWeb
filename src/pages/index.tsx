import type { NextPage } from 'next'

import { getAuth }  from 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth';

import Login from 'view/Login'
import Chatroom from 'view/Chatroom'

const Home: NextPage = () => {
  const auth = getAuth()
  const [user] = useAuthState(auth);

  if (!user) {
    return <Login />
  }

  return <Chatroom />
}

export default Home
