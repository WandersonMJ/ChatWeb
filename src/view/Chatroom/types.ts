import { MutableRefObject } from 'react';

export interface IMessage {
  text: string;
  type: string;
  photoURL?: string;
  dummy: MutableRefObject<HTMLDivElement>
}

export type TMessage = {
  uid: string;
  id: string;
  text: string;
  photoURL: string;
}

export interface IChatMessage {
  messages: TMessage[]
  dummy: MutableRefObject<HTMLDivElement>
  auth: any
}

export interface IWrapperText {
  messageClass: boolean
}

export interface IWrapperChatMessage {
  type: string;
}