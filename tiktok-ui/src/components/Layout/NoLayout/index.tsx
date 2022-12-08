function NoLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="container">
      <div className="content">{children}</div>
    </div>
  );
}

export default NoLayout;
