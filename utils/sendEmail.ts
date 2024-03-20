import { FormData } from "@/components/ContactForm";

function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  // Return the fetch promise
  return fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      // If the response is not 2xx, throw an error
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
}

export { sendEmail };
