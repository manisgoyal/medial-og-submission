import Toggler from "../components/ThemeToggler";
const Layout: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-background">
      <div className=""></div>

      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
