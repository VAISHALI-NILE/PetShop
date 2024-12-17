import axios from "axios";
import Swal from "sweetalert2";

async function networkRequest(
  url,
  handleResponse,
  requestType = "get",
  data = null
) {
  // Set headers
  const headers = {
    "Content-Type": "application/json", // Default to JSON
    Authorization: localStorage.getItem("access_token"),
  };

  // Set loading state to true before making the request

  try {
    let response;

    if (requestType.toLowerCase() === "post") {
      // If it's a POST request, send the data as JSON or FormData
      if (data instanceof FormData) {
        // If data is FormData, don't set 'Content-Type' because axios does it automatically
        console.log("Making POST request to:", url, "with form data:", data);
        response = await axios.post(url, data, { headers });
      } else {
        // If it's JSON data, ensure the headers are correct
        console.log("Making POST request to:", url, "with JSON data:", data);
        response = await axios.post(url, data, { headers });
      }
    } else if (requestType.toLowerCase() === "get") {
      // GET request
      const params = new URLSearchParams(data).toString();
      console.log("Making GET request to:", `${url}?${params}`);
      response = await axios.get(`${url}?${params}`, { headers });
    } else {
      throw new Error(
        "Unsupported request type. Only GET and POST are allowed."
      );
    }

    // Handle the response
    if (response?.data) {
      handleResponse(response.data);
    } else {
      console.log("API Error Response:", response.data);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.data?.message || "Something went wrong!",
      });
    }
  } catch (error) {
    console.log("Request Error:", error);

    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response;

      if (status === 401) {
        localStorage.clear();
        return (window.location.href = "/");
      }

      let errorMessage = error.response.data["message"];
      if (Object.keys(errorMessage).length !== 0) {
        errorMessage = JSON.stringify(errorMessage);
      }

      Swal.fire({
        title: "Oops",
        text: errorMessage,
        icon: "error",
      });
    }
  }
}

export { networkRequest };
