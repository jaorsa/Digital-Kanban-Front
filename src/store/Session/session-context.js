import React from "react";

const SessionContext = React.createContext({
  product: null,
  comments: [],
  drawers: [],
  drawer: null,
  station: null,
  kanbans: [],
  kanban: null,
  addComments: (comments) => {},
  addDrawers: (drawers) => {},
  addKanbans: (kanbans) => {},
  selectProduct: (product) => {},
  selectDrawer: (drawer) => {},
  selectStation: (station) => {},
  selectKanban: (kanban) => {},
  removeData: () => {},
});

export default SessionContext;
