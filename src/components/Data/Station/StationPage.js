import { Component, useContext } from "react";
import axios from "axios";
import UserContext from "../../../store/Auth/user-context";
import StationList from "./StationList";
import Loading from "../../UI/Loading/Loading";
// import "./StationItem.css";

const StationPage = () => {
  const userCtx = useContext(UserContext);
  return (
    <>
      {/* <p>Stations</p> */}
      {!!userCtx.auth ? (
        <StationComponent user_id={userCtx.auth.user_id} />
      ) : (
        <p>Cannot load stations. User not found</p>
      )}
    </>
  );
};

class StationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      stations: [],
    };
  }

  async componentDidMount() {
    // this.setState({ loading: true, stations: DUMMY_DATA });
    // const drawers = await axios.get("http://localhost:3001/drawer");

    const stations = await axios.get("http://localhost:3001/station");
    console.log(stations.data);
    // console.log("user_id..." + this.props.user_id);
    var availableStations = stations.data.filter(
      (station) => station.user_id === this.props.user_id
    );
    if (availableStations.length > 0) {
      console.log("available" + availableStations);
      this.setState({
        loading: !this.state.loading,
        stations: availableStations,
      });
    }

    // const stations = await axios.get('http://localhost:3001/drawer');
    // console.log(stations.data);
    // console.log(drawers.data);

    // axios.get('http://localhost:3001/station', {crossdomain: true})
    // .then(res => {
    //     console.log(res.data)
    //     this.setState({loading: true, stations: res.data})
    // });
  }

  componentWillUnmount() {}

  render() {
    const { loading, stations } = this.state;
    return (
      <>
        {loading && <Loading />}
        {!loading && <StationList stations={stations} />}
      </>
    );
  }
}

export default StationPage;
