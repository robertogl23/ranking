import Row from "./Row";
import RowsLoading from "./RowsLoading";

const RowsData = ({ data }) => (
  <>
    {
      !data ? <RowsLoading/>: (
        data?.map((dataUser, i) => (
          <Row key={dataUser.id} dataUser={dataUser} i={i} />
        ))
      )
    }
  </>
);

export default RowsData;
