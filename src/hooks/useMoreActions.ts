import { useState, useCallback } from 'react';

export interface UseMoreActionsReturn {
  isOpen: boolean;
  openActions: () => void;
  closeActions: () => void;
  toggleActions: () => void;
}

export const useMoreActions = (initialState: boolean = false): UseMoreActionsReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openActions = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeActions = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleActions = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    openActions,
    closeActions,
    toggleActions
  };
};
