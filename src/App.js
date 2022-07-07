import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useServiceWorker } from './pwa/useServiceWorker';

function App() {
  // click to add word
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

  // pwa
  const { reloadPage, showReload, waitingWorker } = useServiceWorker()
  const [refreshButton, setRefreshButton] = useState(null)
  function showToast({button}) {
    setRefreshButton(button)
  }
  function closeToast() {
    setRefreshButton(null)
  }
  // decides when to show the toast
  useEffect(() => {
    if (showReload && waitingWorker) {
      showToast({
        button: (
          <div>
            A new version of this page is available
            <button onClick={() => reloadPage()}>REFRESH</button>
          </div>
        ),
      });
    } else closeToast();
  }, [waitingWorker, showReload, reloadPage]);

  return (
    <div className="App">
      {refreshButton}

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
