function findMinDate() {
  const input = document.getElementById('dateInput').value;
  const dateArray = input
    .split(',')
    .map(date => date.trim())
    .filter(date => date); // remove empty strings

  if (dateArray.length === 0) {
    document.getElementById('result').innerText = "Please enter at least one date.";
    return;
  }

  // Compare date strings directly because they're in YYYY/MM/DD format
  const minDate = dateArray.reduce((min, curr) => curr < min ? curr : min);
  document.getElementById('result').innerText = `Earliest Date: ${minDate}`;
}
