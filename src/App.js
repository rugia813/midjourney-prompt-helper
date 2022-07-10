import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useServiceWorker } from './pwa/useServiceWorker';
import Shelf from './components/Shelf';
import Desk from './components/Desk';
import ModifierPanel from './components/ModifierPanel';
import Header from './components/Header';

function App() {
  // click to add word
  const [deskItems, setDeskItems] = useState([])
  const addDeskItem = useCallback(
    (item) => {
      setDeskItems([...deskItems, item])
    },
    [deskItems],
  )
  const removeFromDeskItemsAtIdx = useCallback(
    (idx) => {
      setDeskItems(deskItems.filter((e, i) => i !== idx))
    },
    [deskItems]
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

  // modifiers
  const [modifiers, setModifiers] = useState([])

  // save words
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

      <div className='w-full'>
        <Desk deskItems={deskItems} addWord={addWord} removeWordAtIdx={removeFromDeskItemsAtIdx} />

        <ModifierPanel modifiers={modifiers} setModifiers={setModifiers} />
      </div>

      <div className='w-full h-fit flex-initial flex flex-col' >
        <Header>Prompt result</Header>
        <div className='w-full h-max flex-initial flex' >
          <textarea
            ref={inputRef}
            className='flex-auto'
            value={res}
            onChange={e => setRes(e.target.value)}
          />
          <button
            className='flex-initial bg-blue-500 hover:bg-blue-300 active:bg-blue-200 p-2 rounded text-lg'
            onClick={e => copyToClipboard(res + modifiers)}
          >📋</button>
        </div>
        <div className='m-auto text-white bg-slate-600 h-6'>{modifiers}</div>
      </div>
    </div>
  );
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default App;
