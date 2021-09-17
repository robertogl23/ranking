const GetUserScore = async () => 
{
    const URL_API = "/";
    const dataResponse = {
        data: {},
        error: true,
        message: "Error",
        statusCode : 500
    }
    try {
        const response = await fetch(URL_API);

        dataResponse.data    = await response.json();
        dataResponse.error   = false;
        dataResponse.message = "Ok";

    } catch (error) {
        dataResponse.data    = [];
        dataResponse.error   = true;
        dataResponse.message = "error api";
    }
    finally
    {
        return dataResponse;
    }
}