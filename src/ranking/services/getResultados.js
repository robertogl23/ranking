const getResultados = async () => {
  const URL_API =
    'https://woj31yv8ra.execute-api.us-east-1.amazonaws.com/';
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
    dataResponse.statusCode = response.status;
  } catch (error) {
    dataResponse.data = [];
    dataResponse.error = true;
    dataResponse.message = 'error api';
    dataResponse.statusCode = 500;
  } finally {
    return dataResponse;
  }
};

export default getResultados;
