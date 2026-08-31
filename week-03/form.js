const form = document.querySelector("#reservation-form");

// ❌ The old way — one fragile blob
// Every field gets mashed into one string.
// The email arrives as: "John 2024-12-01 4 19:00" — unusable.
// const message = `${nameInput.value} ${dateInput.value} ${guestsInput.value}`;

// ✅ Native APIs build a clean, multi-key object
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // data => { name: "John", email: "john@example.com", guests: "4", date: "2024-12-01", time: "19:00" }
  // Each field stays a distinct key all the way to the owner's inbox.
  await sendReservation(data);
});
