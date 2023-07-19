import Button from "./components/ui/Button/Button";
import MessageTemplate from "./components/MessageTemplate/MessageTemplate";
import {useRef, useState} from "react";

const App = () => {

  const [messageTemplateIsOpen, setMessageTemplateIsOpen] = useState(false)

  const inputRef = useRef()

  return (
    <div className='wrapper'>
      <Button
        label='Message Editor'
        onClick={() => {
          setMessageTemplateIsOpen(!messageTemplateIsOpen)
        }}
      />
        <MessageTemplate isOpen={messageTemplateIsOpen}/>


    </div>
  );
};

export default App;