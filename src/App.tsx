import Button from "./components/ui/Button/Button";
import MessageTemplate from "./components/MessageTemplate/MessageTemplate";
import {useState} from "react";

const App = () => {

  const [messageTemplateIsOpen, setMessageTemplateIsOpen] = useState(false)

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