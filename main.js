// Date & Time
function updateTime() {
  const now = new Date();
  document.getElementById("dateTime").innerText =
    now.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }) +
    "\n" +
    now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Search
document.getElementById("searchBox").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const q = e.target.value.trim();
    if (q) window.location.href = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
  }
});

// Placeholder Weather (API later)
document.getElementById("weatherInfo").innerText =
  "20°\nMist\nWind: 0 mph\nSunrise: 7:47 AM · Sunset: 4:23 PM";

// Quotes (randomized later)
const quotes = [
  "Wilderness is not a luxury but a necessity of the human spirit. — Edward Abbey",
  "Happiness depends upon ourselves. — Aristotle",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt"
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];
