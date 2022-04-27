import React, { useRef, useState, useEffect, MutableRefObject, useCallback } from 'react';

import { onSnapshot, collection, serverTimestamp, addDoc, where  } from 'firebase/firestore';
import { getAuth }  from 'firebase/auth'

import { Button } from 'react-bootstrap'
import Text from 'components/Text'

import { db } from 'firebase-config/config'

import { sortNumber }  from 'helpers/sort'

import ChatMessage from './components/chatMessage';

import * as T from './types'
import * as S from './styles';

const Chatroom: React.FC = () => {
  const auth = getAuth()
  const dummy = useRef() as MutableRefObject<HTMLDivElement>;

  const [formValue, setFormValue] = useState('');
  const [messages, setMessages] = useState<T.TMessage[]>([])

  const messagesCollectionRef = collection(db, 'messages')
  

  useEffect(() => {
    if(formValue === '') {
      const getMessages = async () => {
        onSnapshot(messagesCollectionRef,{ includeMetadataChanges: true },(doc) => {
          const messagesAtt = doc.docs.map((doc: any) => ({...doc.data(), id: doc.id})).sort(sortNumber)
          // const messagesAtt = doc.docs.map((doc: any) => ({...doc.data(), id: doc.id}))

          setMessages(messagesAtt)
        })
      }
      getMessages()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue])

  const sendMessage = async (e: any) => {
    e.preventDefault()
    const uid = auth.currentUser?.uid;
    const photoURL = auth.currentUser?.photoURL;

    await addDoc(messagesCollectionRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
  }

  const RenderChatMessage = useCallback(() => (
    <ChatMessage 
      dummy={dummy}
      messages={messages} 
      auth={auth}
    />
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [messages])

  return (
    <S.Container>
      <RenderChatMessage />

      <S.Form onSubmit={sendMessage}>
        <input 
          value={formValue} 
          onChange={(e) => setFormValue(e.target.value)} 
          placeholder="say something nice" 
        />
        <Button variant="primary" type="submit" disabled={!formValue}>sent</Button>
      </S.Form>

      {auth.currentUser && (
        <Button 
          variant="primary"
          className="sign-out" 
          onClick={() => auth.signOut()}
        >
          <Text type='button'>
            Sign Out
          </Text>
        </Button>
      )}
    </S.Container>
  )
}

export default Chatroom;