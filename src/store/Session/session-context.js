import React from "react";

const SessionContext = React.createContext({
  product: null,
  run: null,
  comments: [],
  drawers: [],
  drawer: null,
  station: null,
  kanbans: [],
  kanban: null,
  layout: null,
  addComments: (comments) => {},
  addDrawers: (drawers) => {},
  addKanbans: (kanbans) => {},
  selectRun: (run) => {},
  selectProduct: (product) => {},
  selectDrawer: (drawer) => {},
  selectStation: (station) => {},
  selectKanban: (kanban) => {},
  selectLayout: (layout) => {},
  removeData: () => {},
});

export default SessionContext;
