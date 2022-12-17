import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Modal from '../../UI/Modal';
import FullPost from './List/Post/FullPost';

export const Main = () =>
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <Routes>
        <Route path='/category/:page' element={<List/>} >
          <Route path='post/:id' element={ <Modal><FullPost /></Modal>} />
        </Route>
      </Routes>
    </Layout>
  </main>;

