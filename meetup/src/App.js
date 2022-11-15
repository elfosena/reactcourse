import { Route, Routes } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<AllMeetUpsPage />}></Route>
        <Route path="/new-meetup" exact={true} element={<NewMeetupPage />}></Route>
        <Route path="/favorites" exact={true} element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
