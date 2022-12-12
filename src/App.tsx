import Wrapper from "./layout/wrapper/Wrapper";
import LocalStorageManager from "./models/LocalStorageManager";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setAuthenticated } from "./store/slices/AuthSlice";
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from "./components/theme/Theme";

function App() {
  const dispatch = useAppDispatch();
  const storagemanager = new LocalStorageManager();
  if (storagemanager.checkUserData()){
     dispatch(setAuthenticated(true));
  }

  const isUserAuthenticated = useAppSelector((state) => state.authenticationReducer.isUserAuthenticated);
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
      <Wrapper isUserAuthenticated={isUserAuthenticated}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
