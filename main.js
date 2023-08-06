function fetchHoroscope(sunSign) {
  const fetchHoroscopeApiURL =
    "https://aztro.sameerkumar.website/?sign=${sunSign}&day=today;";
}

document
  .getElementById("findHoroscope")
  .addEventListener("click", async function () {
    const birthdayInput = document.getElementById("birthday");
    const birthday = new Date(birthdayInput.value);
    const sunSign = getHoroscope(birthday);
  });
