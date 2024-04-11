import { createContext, useContext, useState } from "react";

const FlashMessageContext = createContext();

export const FlashMessageProvider = ({ children }) => {
  const [message, setMessage] = useState();
  const [ isSuccessMessage, setIsSuccessMessage ] = useState(false);

  return (
    <FlashMessageContext.Provider
      value={{ message, setMessage, isSuccessMessage, setIsSuccessMessage }}
    >
      {children}
    </FlashMessageContext.Provider>
  );
};

export const useFlashMessage = () => useContext(FlashMessageContext);