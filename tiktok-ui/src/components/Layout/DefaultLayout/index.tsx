import classNames from 'classnames/bind'
import Header from '../components/Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles);

type LayoutProps = {
  children: JSX.Element
}

function DefaultLayout({ children }: LayoutProps) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
