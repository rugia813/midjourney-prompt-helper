import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useServiceWorker } from './pwa/useServiceWorker';
import Shelf from './components/Shelf';
import Desk from './components/Desk';

function App() {
  // click to add word
  const [deskItems, setDeskItems] = useState([])
  const addDeskItem = useCallback(
    (item) => {
      setDeskItems([...deskItems, item])
    },
    [deskItems],
  )

  const [res, setRes] = useState('')
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

  const [customCollections, setCustomCollections] = useState([])

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
    <div className="App h-screen flex flex-col items-center max-w-6xl m-auto justify-around">
      {refreshButton}

      <Shelf addDeskItem={addDeskItem} customCollections={customCollections} />

      <Desk deskItems={deskItems} addWord={addWord} />

      <input
        ref={inputRef}
        value={res} onChange={e => setRes(e.target.value)}
      />
    </div>
  );
}

export default App;
