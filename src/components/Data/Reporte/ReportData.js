import "./Report.css";

const ReportData = (props) => {
  return (
    <>
      <br></br>
      <h5>Tiempo de ciclo: {props.item.ct}</h5>
      <br></br>
      <h5>Número de Operadores: {props.item.n_operators}</h5>
      <br></br>
      <h5>Work in Progress: {props.item.wip}</h5>
      <br></br>
      <h5>Tiempo de transporte: {props.item.tt}</h5>
      <br></br>
      <h5>Tiempo de takt: {props.item.tkt}</h5>
      <br></br>
      <h5>Tiempo de takt real: {props.item.tkt_real}</h5>
      <br></br>
      <h5>Tiempo idle: {props.item.idle}</h5>
      <br></br>
      <h5>Tiempo lead: {props.item.lead}</h5>
      <br></br>
      <h5>Tiempo neto de produccion: {props.item.net}</h5>
      <br></br>
    </>
  );
};

export default ReportData;
