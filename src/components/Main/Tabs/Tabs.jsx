import style from './Tabs.module.css';

export const Tabs = () => {
  console.log(style);
  return <ul className={style.list}>
    <li><a href="/">Front</a></li>
    <li><a href="/">Looked</a></li>
    <li><a href="/">Saved</a></li>
    <li><a href="/">My posts</a></li>
  </ul>;
};

