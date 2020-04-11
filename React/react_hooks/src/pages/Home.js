import React, { useContext } from "react";
// const context = useContext(contextValue)
import loginContext from "./useContext";
const Home = () => {
  // const [user,setUser] =
  const { user, setUser } = useContext(loginContext);
  return (
    <div>
      react hooks， 点击tab切换页面
      <div>
        {!user ? (
          <button onClick={() => setUser("你好，你已登陆")}>
            登录 <br />
          </button>
        ) : (
          <>
            user: {user}
            <br />
            <button onClick={() => setUser("")}>
              注销
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Home;
