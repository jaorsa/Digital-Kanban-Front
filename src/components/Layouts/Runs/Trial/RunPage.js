import axios from "axios";

const Runs = () => {
  return <RunsPage />;
};

class RunsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      runs: [],
      layouts: [],
    };
  }

  async componentDidMount() {
    const layouts = await axios.get("http://localhost:3001/layout");
    const runs = await axios.get("http://localhost:3001/run");
    // const filteredLayouts = layouts.filter();
    this.setState({ loading: true, runs: runs, layouts: layouts });
  }

  componentWillUnmount() {}

  onClickHandler = (id) => {
    console.log(id + "received!");
  };

  render() {
    const { loading, runs } = this.state;
    return (
      <div className={classes.container}>
        <h1>Runs</h1>
        {loading && <div>Loading ...</div>}
        <RunsList runs={runs} onClick={this.onClickHandler} />
      </div>
    );
  }
}

export default Runs;
