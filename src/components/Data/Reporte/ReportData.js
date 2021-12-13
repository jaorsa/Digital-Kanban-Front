import "./Report.css";

const ReportData = (props) => {
  return (
    <>
      <p>hello</p>
      <h5>Tiempo de ciclo: </h5>
      <p>{props.item.ct}</p>
      <h5>Número de Operadores: </h5>
      <p>{props.item.n_operators}</p>
      <h5>Work in Progress: </h5>
      <p>{props.item.wip}</p>
      <h5>Tiempo de transporte: </h5>
      <p>{props.item.tt}</p>
      <h5>Tiempo de takt: </h5> <p>{props.item.tkt}</p>
      <h5>Tiempo de takt real: </h5>
      <p>{props.item.tkt_real}</p>
      <h5>Tiempo idle: </h5>
      <p>{props.item.idle}</p>
      <h5>Tiempo lead: </h5>
      <p>{props.item.lead}</p>
      <h5>Tiempo neto de produccion: </h5>
      <p>{props.item.net}</p>
    </>
  );
};

export default ReportData;
