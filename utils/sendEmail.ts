import { FormData } from "@/components/contact/ContactForm";

export default function sendEmail(data: FormData) {
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
    .catch((error) => {
      console.error("Error sending email:", error.message);
      throw error;
    });
}
