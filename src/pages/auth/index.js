import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-full w-full flex flex-wrap overflow-auto gap-8 justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
