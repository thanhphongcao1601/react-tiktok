import { HeaderOnly, NoLayout } from '../components/Layout';
import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Upload from '../pages/Upload';

interface publicRouterType {
  path: string;
  layout?: ({ children }: { children: JSX.Element }) => JSX.Element;
  component: JSX.Element;
}

const publicRouter: publicRouterType[] = [
  {
    path: '/',
    layout: undefined,
    component: <Home />,
  },
  {
    path: '/following',
    component: <Following />,
  },
  {
    path: '/profile',
    component: <Profile />,
  },
  {
    path: '/upload',
    layout: HeaderOnly,
    component: <Upload />,
  },
  {
    path: '/search',
    layout: NoLayout,
    component: <Search />,
  },
];

export { publicRouter };
