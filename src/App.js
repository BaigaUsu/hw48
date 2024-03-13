import './App.css';
import { Title } from './Title';
import './Title.css'
import { List } from './List';
import './List.css'
import { Button } from './Button';
import './Button.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title 
          className='title'
          text='Apple'
        />
        <List 
          className='list'
        > 
          <li>MacOS</li>
          <li>Iphone</li>
          <li>Ipad</li>
          <li>Airdrop</li>
          <li>Apple Watch</li>
        </List>
        <Button 
          className="button" 
          text='Click'
          onClick={() => {
            const url = 'https://www.apple.com/'
            window.open(url, '_blank')
          }}
        />
        
      </header>
    </div>
  );
}

export default App;
