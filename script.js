async function recommend() {
  const month = parseInt(document.getElementById("month").value);
  const response = await fetch("data/spots.json");
  const spots = await response.json();

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const matches = spots.filter(spot => spot.bestMonths.includes(month));

  if (matches.length === 0) {
    resultsDiv.innerHTML = "No surf spots found for this month.";
  } else {
    matches.forEach(spot => {
      const div = document.createElement("div");
      div.className = "spot";
      div.innerHTML = `<strong>${spot.name}</strong><br>${spot.country}`;
      resultsDiv.appendChild(div);
    });
  }
}
