import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Modal from '../../UI/Modal';
import FullPost from './List/Post/FullPost';
import FrontPage from './FrontPage';
import Page404 from './Page404';

export const Main = () =>
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <Routes>
        <Route path='/' element={<FrontPage/>} />
        <Route path='/auth' element={<FrontPage/>} />
        <Route path='/category/:page' element={
          <List pageSize={5} autoloadDepth={2} />}>
          <Route path='post/:id' element={ <Modal><FullPost /></Modal>} />
        </Route>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Layout>
  </main>;

