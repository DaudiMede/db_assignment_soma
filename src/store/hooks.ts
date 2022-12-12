import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { RootSate, AppDispatch } from './Store';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootSate> = useSelector;