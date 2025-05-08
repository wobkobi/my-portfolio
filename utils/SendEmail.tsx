import { FormData } from "@/types/Types";

async function sendEmail(
  data: FormData
): Promise<{ message: string } | { err: string }> {
  const apiEndpoint = "/api/email";

  return fetch(apiEndpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((errorData) => {
          const errorMessage =
            errorData.error || "An error occurred while sending the email";

          throw new Error(errorMessage);
        });
      }

      return res.json();
    })

    .catch((err) => {
      console.error("Error sending email:", err.message);

      throw err;
    });
}

export default sendEmail;
