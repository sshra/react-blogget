import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Main from './components/Main';
import { AuthContextProvider } from './context/authContext';
import { PostsContextProvider } from './context/postsContext';

const App = () => (
  <Provider store={store}>
    <AuthContextProvider>
      <Header/>
      <PostsContextProvider>
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  </Provider>
);

export default App;
