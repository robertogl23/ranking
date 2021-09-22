import Row from "./Row";

const RowsData = ({ data }) => (
  <>
    {data?.map((dataUser, i) => (
      <Row key={dataUser.id} dataUser={dataUser} i={i} />
    ))}
  </>
);

export default RowsData;
