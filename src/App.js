import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useServiceWorker } from './pwa/useServiceWorker';
import popular1 from "./wordCollections/popular/popular1.json";

function App() {
  // click to add word
  const wordCollections = [
    { name:'popular', items: popular1 }
  ]
  console.log('wordCollections: ', wordCollections);
  const deskItems = ['aaa', 'bbb', 'ccc']
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

  // pwa
  const { reloadPage, showReload, waitingWorker } = useServiceWorker()
  const [refreshButton, setRefreshButton] = useState(null)
  useEffect(() => {
    if (showReload && waitingWorker) {
      setRefreshButton((
        <div>
          A new version of this page is available
          <button onClick={() => reloadPage()}>REFRESH</button>
        </div>
      ));
    } else setRefreshButton(null);
  }, [waitingWorker, showReload, reloadPage]);

  return (
    <div className="App">
      {refreshButton}

      <ul>
        {deskItems.map((e, i) =>
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
