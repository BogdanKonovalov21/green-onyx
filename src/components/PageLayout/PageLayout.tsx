import { NextPage } from "next";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: NextPage<PageLayoutProps> = ({ children }) => (
  <div className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto">
    {children}
  </div>
);

export default PageLayout;
