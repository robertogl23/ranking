const GetUserScore = async () => {
  const URL_API =
    'https://robertogl23.github.io/TESICAMPWEB21/tablero/data.json';
  const dataResponse = {
    data: {},
    error: true,
    message: 'Error',
    statusCode: 500,
  };
  try {
    const response = await fetch(URL_API);

    dataResponse.data = await response.json();
    dataResponse.error = false;
    dataResponse.message = 'Ok';
  } catch (error) {
    dataResponse.data = [];
    dataResponse.error = true;
    dataResponse.message = 'error api';
  } finally {
    return dataResponse;
  }
};

export default GetUserScore;
