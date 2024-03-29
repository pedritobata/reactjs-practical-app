import { Switch, Route } from "react-router-dom";
import MainLinks from './MainLinks';
import Error404 from './404';
import ScreensRouter01 from '../01-simple-login/screens/Router';
import ScreensRouter02 from '../03-movies/presentation/screens/Router';
import Challenges from '../04-challenges/main';
import PersonList1 from "../05-preparation/person-list-1";


export default function MainRoutes() {
  return (
        <Switch>
          <Route path="/01" component={ScreensRouter01} />
          <Route path="/03" component={ScreensRouter02} />
          <Route path="/04" component={Challenges} />
          <Route path="/05" component={PersonList1} />
          <Route exact path="/" component={MainLinks}/>
          <Route component={Error404}/>
        </Switch>
  );
}
