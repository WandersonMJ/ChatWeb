import React, { useEffect } from 'react';

import Text from 'components/Text'

import scrollToBottom from 'helpers/scrollBottom'

import * as T from '../../types'
import * as S from './styles';


const Message = ({ text, photoURL, type, dummy }: T.IMessage) => {
  // useEffect(() => {
  //   debounce(100, () =>{
  //     // dummy?.current?.scrollIntoView({ behavior: "smooth" })
  //     dummy?.current?.scrollIntoView()
  //     console.log('testando')
  //   })
  // }, [dummy])

  return (
  <S.WrapperChatMessage ref={dummy} type={type}>
    <S.Image src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
    <Text>{text}</Text>
    {/* <span ></span> */}
  </S.WrapperChatMessage>
)}

const ChatMessage = ({ messages, dummy, auth }: T.IChatMessage) => {

  useEffect(() => {
      scrollToBottom()
  }, [])

  return (
    <S.WrapperChatBot className='chatroom'>
      {messages.map((item) => {
        return (
          <S.WrapperText messageClass={item.uid === auth?.currentUser?.uid} key={item.id}>
            <Message
              type={item.uid === auth?.currentUser?.uid ? "sent" : "received"} 
              text={item.text}
              photoURL={item.photoURL}
              dummy={dummy}
              />
            
          </S.WrapperText> 
          ) 
        }
      )}
    </S.WrapperChatBot>
  )
}

export default ChatMessage;