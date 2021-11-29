import { useEffect, useState } from "react";
import axios from "axios";
// import user from "../../../constants/user";
// import UserContext from "../../../store/Auth/user-context";
import KanbanList from "./KanbanList";

const KanbanPage = () => {
  return (
    <>
      <div className="kanbans">
        <p>Kanbans</p>
        <KanbanComponent />
      </div>
    </>
  );
};

const KanbanComponent = () => {
  const [kanbans, setKanbans] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    loadingData();
  }, [kanbans]);

  async function loadingData() {
    // const drawers = await axios.get("http://localhost:3001/drawer");
    const kanbans = await axios.get("http://localhost:3001/kanban");
    console.log(kanbans.data);
    // var availableKanban = kanbans.data.filter((kanban) => )
    if (kanbans.data.length > 0) {
      console.log("kanbans available...");
      console.log(kanbans.data);
      setKanbans(kanbans.data);
      setLoading(false);
    }
    return kanbans.data;
  }

  var content = <p>Loading...</p>;

  if (!isLoading) {
    content = <KanbanList kanbans={kanbans} />;
  }

  return content;
};

export default KanbanPage;
