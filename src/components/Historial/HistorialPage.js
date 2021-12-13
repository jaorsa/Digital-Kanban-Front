import React, { useState, useContext } from "react";
// import LayoutList from "./LayoutList";
// import "./LayoutList.css";
// import TrialItem from "./Layouts/Trial";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Layout__List from "./Layouts/Layout__List";
import LatestRun__List from "./Runs/Latest/LatestRun__List";
import SessionContext from "../../store/Session/session-context";

const HistorialPage = (props) => {
  const history = useHistory();
  const sessionCtx = useContext(SessionContext);

  const SelectItemHandler = (layoutId) => {
    console.log("layout: " + layoutId);
    sessionCtx.selectLayout(layoutId);
    history.push(ROUTES.DATA);
    //   user.layout_id = layoutId;
    //   history.push(ROUTES.DATA);
  };
  const SelectRunHandler = (run_id) => {
    console.log("run: " + run_id);
    //   user.layout_id = layoutId;
    //   history.push(ROUTES.DATA);
  };

  let content = (
    <div>
      <p>content</p>
      <p style={{ textAlign: `center` }}> No layout found </p>
    </div>
  );

  if (props.layouts.length > 0) {
    content = (
      <div>
        {/* // <TrialItem items={props.items} onSelect={SelectItemHandler} /> */}
        <Layout__List
          layouts={props.layouts}
          onSelectItem={SelectItemHandler}
        />
        <LatestRun__List runs={props.runs} onSelectItem={SelectRunHandler} />
        {/* // <LayoutList layouts={props.items} onSelectItem={SelectItemHandler} /> */}
      </div>
    );
  }

  return content;
  /* Include Latests Runs */
  // Include Latests Layouts
  // Include All Layouts
  // <div className="layouts">
  //   {content}
  //   {/* <LayoutList layouts={props.items} onSelectItem={SelectItemHandler} /> */}
  // </div>
};

export default HistorialPage;
