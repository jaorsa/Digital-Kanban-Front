import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CSVLink } from "react-csv";
import Button from "../../UI/Button/Button";

const ReportGraph = (props) => {
  const headers = [
    { label: "Tiempo de ciclo", key: "ct" },
    { label: "Número de Operadores", key: "n_operators" },
    { label: "Work in Progress", key: "wip" },
    { label: "Tiempo de transporte", key: "tt" },
    { label: "Tiempo de takt", key: "tkt" },
    { label: "Tiempo de takt real", key: "tkt_real" },
    { label: "Tiempo de idle", key: "idle" },
    { label: "Tiempo de lead", key: "lead" },
    { label: "Tiempo neto de producción", key: "net" },
  ];

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Bar
        datasetIdKey="id"
        data={{
          labels: ["Yesterday", "Today", "Upcoming"],
          datasets: [
            {
              label: "Lead Time",
              backgroundColor: "rgba(75,192,192,1)",
              // borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [10.7, 16.0, 9.8],
            },
          ],
        }}
      />
      {/* <Line
        datasetIdKey="id"
        data={{
          labels: ["Jun", "Jul", "Aug"],
          datasets: [
            {
              id: 1,
              label: "",
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
          ],
        }}
      /> */}
      <div className="button-container">
        <Button>
          <CSVLink className="button" data={props.data} headers={headers}>
            Download Report
          </CSVLink>
        </Button>
      </div>
    </>
  );
};

export default ReportGraph;
