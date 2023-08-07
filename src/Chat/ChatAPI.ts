import { Action } from "./ChatActions";
import { useAppDispatch, useAppState } from "./ChatContext";

export const useChatAPI = () => {
  const { openai } = useAppState();
  const dispatch = useAppDispatch();

  const sendMessage = async (text: string, role: 'user' | 'system' = 'user') => {
    dispatch({
      type: Action.MAKE_REQUEST,
      payload: {
        username: 'George',
        content: text,
        time: new Date().getTime(),
        type: 'me',
      }
    });

    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role, content: text }
        ],
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      const { data } = response;
      const { choices, created } = data;

      dispatch({
        type: Action.SHOW_RESPONSE,
        payload: {
          username: 'OdamaChat',
          content: choices[0].message?.content,
          time: created*1000,
          type: 'system',
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  return { sendMessage };
}
