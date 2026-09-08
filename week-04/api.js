const ENDPOINT = "https://example.com/submit"; // placeholder — never a real URL or key

async function sendReservation(data) {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // ❌ Don't do this — silently swallows failures
    // return await res.json();

    // ✅ Check the contract first
    // A 4xx means the contract is wrong: field names, auth header, or endpoint.
    // Read the response body — it usually tells you exactly what's wrong.
    if (!res.ok) {
      const detail = await res.text();
      throw new Error(`Request failed ${res.status}: ${detail}`);
    }

    return await res.json();

  } catch (err) {
    // Separate network failure (no response) from contract failure (bad response)
    console.error("Reservation submit failed:", err);
    showUserError("Something went wrong — please try again.");
  }
}
