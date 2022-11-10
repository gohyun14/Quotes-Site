import MainNavigation from './MainNavigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainNavigation />
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</main>
    </>
  );
};

export default Layout;
