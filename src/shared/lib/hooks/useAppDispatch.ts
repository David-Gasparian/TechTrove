import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/provider/storeProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
