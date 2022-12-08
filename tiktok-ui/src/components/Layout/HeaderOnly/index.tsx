import Header from '../components/Header';

type LayoutProps = {
  children: JSX.Element;
};

function HeaderOnly({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
