import { Route, Routes } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact={true} element={<AllMeetUpsPage />}></Route>
        <Route path="/new-meetup" exact={true} element={<NewMeetupPage />}></Route>
        <Route path="/favorites" exact={true} element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
