import './App.css';
import { useRef, useState } from 'react';

function App() {
  const items = ['aaa', 'bbb', 'ccc']
  const [res, setRes] = useState('dsadsa')
  const inputRef = useRef()

  const addWord = (word) => {
    const from = inputRef.current.selectionStart
    const to = inputRef.current.selectionEnd
    setRes(state => state.substring(0, from) + word + state.substring(to, state.length))
    setTimeout(() => {
      const newPos = to + word.length
      inputRef.current.selectionStart = newPos
      inputRef.current.selectionEnd = newPos
    }, 100)
  }
  
  return (
    <div className="App">
      <ul>
        {items.map((e, i) => 
          <li onClick={() => addWord(e)} key={i}>{e}</li>
        )}
      </ul>

      <input
        ref={inputRef}
        value={res} onChange={e => setRes(e.target.value)} 
      />
    </div>
  );
}

export default App;
