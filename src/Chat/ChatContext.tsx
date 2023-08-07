import { FC, PropsWithChildren, createContext, useContext, useReducer } from 'react';
import { Configuration, OpenAIApi } from "openai";
import { Action } from './ChatActions';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

interface Chat {
  username: string;
  time: number,
  content: string;
  type: 'me' | 'system';
}

interface ActionProps {
  type: Action;
  payload: any;
}

interface InitialStateProps {
  showLoader: boolean;
  openSidebar: boolean;
  systemDescription?: string;
  chats: Chat[];
  openai: OpenAIApi;
}

const initialState: InitialStateProps = {
  showLoader: false,
  openSidebar: false,
  chats: [],
  openai,
}

const ChatContext = createContext<InitialStateProps | null>(null);
const ChatDispatchContext = createContext<any>(null);

const reducer = (state: InitialStateProps, action: ActionProps): InitialStateProps => {
  switch (action.type) {
    case Action.TOGGLE_SIDEBAR: {
      return {
        ...state,
        openSidebar: !state.openSidebar,
      };
    }
    case Action.MAKE_REQUEST: {
      return {
        ...state,
        showLoader: true,
        chats: [...state.chats, action.payload],
      };
    }
    case Action.SHOW_RESPONSE: {
      return {
        ...state,
        showLoader: false,
        chats: [...state.chats, action.payload],
      };
    }
    case Action.CLEAR: {
      return {
        ...state,
        chats: [],
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const ChatProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChatContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatContext.Provider>
  );
};

export const useAppState = (): InitialStateProps => useContext(ChatContext) as InitialStateProps;
export const useAppDispatch = () => useContext(ChatDispatchContext);
