import Button from "./components/ui/Button/Button";
import MessageTemplate from "./components/MessageTemplate/MessageTemplate";

const App = () => {
  return (
    <div className='wrapper'>
      {/*<Button label='Message Editor'/>*/}
      <MessageTemplate/>
    </div>
  );
};

export default App;