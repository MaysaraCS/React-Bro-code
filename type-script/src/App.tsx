import { User } from "./Components/User";
import { Countries } from "./Components/User";
import { UserProvider } from "./Providers/UserContextProvider";

const App = () => {
  return (
    <UserProvider>
      <User name="maysara" age={22} isMarried={false} country={Countries.Brazil} />
      <User name="ahmed" age={25} isMarried={true} country={Countries.egypt} />
    </UserProvider>
  );
};

export default App;
