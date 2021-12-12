// libs
import { useState, useEffect } from 'react';
import moment from 'moment';

export const useStoreTime = ({ openTime, closeTime }) => {
  const [open, setOpen] = useState(openTime);
  const [close, setClose] = useState(closeTime);
  const [storeState, setStoreState] = useState({
    status: 'default',
    text: 'undefied',
  });
  useEffect(() => {
    if (close === null && open === null) {
      setStoreState({
        status: 'default',
        text: 'undefied',
      });
    }
    const now = moment();
    const isAfter = now.isAfter(moment(open, 'HH:mm:ss'));
    const isBefore = now.isBefore(moment(close, 'HH:mm:ss'));
    if (!isAfter || !isBefore) {
      setStoreState({ status: 'error', text: 'Not open' });
    }
    if (isAfter && isBefore) {
      setStoreState({ status: 'success', text: 'Openning' });
    }
  }, [open, close]);

  const updateOpen = (value) => setOpen(value);
  const updateClose = (value) => setClose(value);
  return {
    updateOpen,
    updateClose,
    storeState,
  };
};
