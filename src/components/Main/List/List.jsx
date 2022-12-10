import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2022-12-01T09:45:00.000Z',
      id: '678',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 77,
      date: '2022-12-21T09:45:00.000Z',
      id: '123',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 15,
      date: '2022-01-03T19:45:00.000Z',
      id: '234',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 34,
      date: '2022-10-01T08:35:00.000Z',
      id: '345',
    },
  ];

  return (
    <ul className={style.list}>
      {
        postsData.map((postData, index) =>
          <Post key={postData.id} postData={postData} />)
      }
    </ul>
  );
};
