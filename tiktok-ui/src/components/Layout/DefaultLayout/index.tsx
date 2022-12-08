import Header from '../components/Header';
import SideBar from './SideBar';

type LayoutProps = {
  children: JSX.Element
}

function DefaultLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
