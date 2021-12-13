import AuthUserProvider from "./store/Auth/UserProvider";
import React from "react";
import { BrowserRouter as Router, /*Redirect,*/ Route } from "react-router-dom";
import Navigation from "./components/Navigation/Nav-Header/Navigation";
import SignUpPage from "./components/SignUp/SignUpClass";
import * as ROUTES from "./constants/routes";
import SignInPage from "./components/SignIn/SignInClass";
// import LayoutsPage from "./components/Layouts/LayoutPage";
import AdminPage from "./components/Administrator/UserList/AdminPage";
import Landing from "./components/Navigation/Landing/Landing";
import StationPage from "./components/Data/Station/StationPage";
import EditAccountPage from "./components/Account/Account";
import RunPage from "./components/Historial/Historial";
// import TrialItem from "./components/Historial/Trial";
// import HistorialPage from "./components/Historial/HistorialPage";
import DataPage from "./components/Historial/Data/Data";
import CommentBox from "./components/Historial/Data/Comments/CommentBox";
import SessionProvider from "./store/Session/SessionProvider";
import Products from "./components/Data/Product/ProductPage";
import KanbanPage from "./components/Data/Kanban/KanbanPage";
import ReportPage from "./components/Data/Reporte/ReportPage";
import StationCard from "./components/Data/Station/Card/StationCard";
import Buttons from "./components/Layouts/Runs/Trial/Buttons";
import HistorialCatalog from "./components/Historial/Historial";
// import DataPage from "./components/Historial/Runs/RunTable/DataPage";
import { Toaster } from "react-hot-toast";
// import { Menu } from "./components/UI/Menu/Menu";
import EditModal from "./components/UI/Modal/Edit__Component/EditModal";
import Modal from "./components/UI/Modal/Trial";
import New__Layout from "./components/Historial/Layouts/New__Layout/New__Layout";

const Trial = () => {
  return (
    <Modal>
      <h1>Contenido</h1>
      <p>Probando...</p>
    </Modal>
  );
};

function App() {
  return (
    <Router>
      <AuthUserProvider>
        <Navigation />
        <SessionProvider>
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.ACCOUNT} component={EditAccountPage} />
          <Route path={ROUTES.RUNS} component={HistorialCatalog} />
          <Route path={ROUTES.HOME} component={Landing} />
          <Route path={ROUTES.DATA} component={DataPage} />
          <Route path={ROUTES.PROD} component={Products} />
          <Route path={ROUTES.STATIONS} component={StationPage} />
          <Route path={ROUTES.KANBANS} component={KanbanPage} />
          <Route path={ROUTES.REPORTS} component={ReportPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          {/* <Route path={ROUTES.LANDING} component={New__Layout} /> */}
          {/* <Route path="*">
            <Redirect to={ROUTES.LANDING} />
          </Route> */}
        </SessionProvider>
      </AuthUserProvider>
      <Toaster />
    </Router>
  );
}

export default App;
