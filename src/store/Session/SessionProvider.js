import { useReducer } from "react";
import SessionContext from "./session-context";

const defaultState = {
  product: null,
  comments: [],
  drawers: [],
  drawer: null,
  station: null,
  kanbans: [],
  kanban: null,
};

const sessionReducer = (state, action) => {
  if (action.type === "GET__COMMENTS") {
    const data__comments = action.comments;
    console.log("storing comments..." + data__comments);
    return { ...state, comments: data__comments };
  }
  if (action.type === "GET__DRAWERS") {
    const data__drawers = action.drawers;
    console.log("storing drawers..." + data__drawers);
    return { ...state, drawers: data__drawers };
  }
  if (action.type === "GET__KANBANS") {
    const data__kanbans = action.kanbans;
    console.log("storing kanbans..." + data__kanbans);
    return { ...state, kanbans: data__kanbans };
  }
  if (action.type === "SELECT__STATION") {
    const data__stationObject = action.station;
    console.log("storing actual station..." + data__stationObject);
    return { ...state, station: data__stationObject };
  }
  if (action.type === "SELECT__KANBAN") {
    const data__kanbanObject = action.kanban;
    console.log("storing actual kanban..." + data__kanbanObject);
    return { ...state, kanban: data__kanbanObject };
  }
  if (action.type === "SELECT__DRAWER") {
    const data__drawerObject = action.drawer;
    console.log("storing actual drawer..." + data__drawerObject);
    return { ...state, drawer: data__drawerObject };
  }
  if (action.type === "SELECT__PRODUCT") {
    const data__productObject = action.product;
    console.log("storing actual product... " + data__productObject);
    return { ...state, product: data__productObject };
  }

  if (action.type === "REMOVE__DATA") {
    console.log("CLEANUP");
    return defaultState;
  }
};

const SessionProvider = (props) => {
  const [dataState, dispatchDataAction] = useReducer(
    sessionReducer,
    defaultState
  );

  const getCommentsHandler = (data__comments) => {
    dispatchDataAction({ type: "GET__COMMENTS", comments: data__comments });
  };

  const getDrawersHandler = (data__drawers) => {
    dispatchDataAction({ type: "GET__DRAWERS", drawers: data__drawers });
  };

  const getKanbansHandler = (data__kanbans) => {
    dispatchDataAction({ type: "GET__KANBANS", kanbans: data__kanbans });
  };

  const stationHandler = (data__station) => {
    dispatchDataAction({ type: "SELECT__STATION", station: data__station });
  };

  const kanbanHandler = (data__kanban) => {
    dispatchDataAction({ type: "SELECT__KANBAN", kanban: data__kanban });
  };

  const drawerHandler = (data__drawer) => {
    dispatchDataAction({ type: "SELECT__DRAWER", drawer: data__drawer });
  };

  const productHandler = (data__product) => {
    dispatchDataAction({ type: "SELECT__PRODUCT", product: data__product });
  };

  const removeDataHandler = () => {
    dispatchDataAction({ type: "REMOVE__DATA" });
  };

  const dataContext = {
    product: dataState.product,
    comments: dataState.comments,
    drawers: dataState.drawers,
    drawer: dataState.drawer,
    station: dataState.station,
    kanbans: dataState.kanbans,
    kanban: dataState.kanban,
    addComments: getCommentsHandler,
    addDrawers: getDrawersHandler,
    addKanbans: getKanbansHandler,
    selectProduct: productHandler,
    selectDrawer: drawerHandler,
    selectStation: stationHandler,
    selectKanban: kanbanHandler,
    removeData: removeDataHandler,
  };

  return (
    <SessionContext.Provider value={dataContext}>
      {props.children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
