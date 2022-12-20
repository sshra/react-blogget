import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import { Navigate, Route, Routes } from 'react-router-dom';
import Modal from '../../UI/Modal';
import FullPost from './List/Post/FullPost';
import FrontPage from './FrontPage';
import Page404 from './Page404';
import Page403 from './Page403';

export const Main = () =>
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <Routes>
        <Route path='/' element={<FrontPage/>} />
        <Route path='/auth' element={<Navigate to='/'/>} />
        <Route path='/category/:page' element={
          <List pageSize={10} autoloadDepth={2} />}>
          <Route path='post/:id' element={ <Modal><FullPost /></Modal>} />
        </Route>
        <Route path="/404" element={<Page403/>}/>
        <Route path="/404" element={<Page404/>}/>
        <Route path="*" element={<Navigate to='/404'/>}/>
      </Routes>
    </Layout>
  </main>;

