import MainNavigation from './MainNavigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainNavigation />
      <main className="my-12 mx-auto w-11/12 max-w-2xl">{children}</main>
    </>
  );
};

export default Layout;
