import { useState, useCallback, useEffect } from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
export const useServiceWorker = () => {
  const [waitingWorker, setWaitingWorker] = useState(null);
  const [showReload, setShowReload] = useState(false);
  // called when a service worker
  // updates. this function is a callback
  // to the actual service worker
  // registration onUpdate.
  const onSWUpdate = useCallback((registration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  }, []);
  // simply put, this tells the service
  // worker to skip the waiting phase and then reloads the page
  const reloadPage = useCallback(() => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  }, [waitingWorker]);
  // register the service worker
  useEffect(() => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorkerRegistration.register({
      onUpdate: onSWUpdate,
    });
  }, [onSWUpdate]);
  return { showReload, waitingWorker, reloadPage };
};