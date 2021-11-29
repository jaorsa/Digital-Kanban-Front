import ReportData from "./ReportData";
import ReportGraph from "./ReportGraph";

const DUMMY_DATA = [
  {
    id: 1,
    ct: 24000,
    n_operators: 10,
    wip: 6,
    tt: 256,
    tkt: 2500,
    tkt_real: 4000,
    idle: 1000,
    lead: 2500,
    net: 25000,
  },
  {
    id: 2,
    ct: 24000,
    n_operators: 10,
    wip: 6,
    tt: 256,
    tkt: 2500,
    tkt_real: 4000,
    idle: 1000,
    lead: 2500,
    net: 25000,
  },
];

const ReportPage = (props) => {
  return (
    <section className="reports">
      <div className="col-1">
        <ReportData item={DUMMY_DATA[0]} />
      </div>
      <div className="col-2">
        <ReportGraph data={DUMMY_DATA} />
      </div>
    </section>
  );
};

export default ReportPage;
