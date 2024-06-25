import { useEffect } from 'react';

function useFeatherIcons() {
  useEffect(() => {
    feather.replace();
  }, []);
}

export default useFeatherIcons;