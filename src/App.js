import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useServiceWorker } from './pwa/useServiceWorker';
import Shelf from './components/Shelf';

function App() {
  // click to add word
  const [deskItems, setDeskItems] = useState([])
  const addDeskItem = useCallback(
    (item) => {
      setDeskItems([...deskItems, item])
    },
    [deskItems],
  )

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

  //#region pwa
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
  //#endregion

  return (
    <div className="App h-screen flex flex-col items-center">
      {refreshButton}

      <Shelf addDeskItem={addDeskItem} />

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
