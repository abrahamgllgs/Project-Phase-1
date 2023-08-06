function fetchHoroscope(sunSign) {
  const fetchHoroscopeApiURL =
    "https://aztro.sameerkumar.website/?sign=${sunSign}&day=today;";

  return fetch(ApiURL, { method: "POST" })
    .then((respond) => respond.json())
    .then((data) => data.description);
}

function getHoroscope(birthdate) {
  const month = birthdate.getMonth() + 1;
  const day = birthdate.getDate();

  const horosocopes = {
    2: "Aquarius",
    3: "Pisces",
    4: "Aries",
    5: "Taurus",
    6: "Gemini",
    7: "Cancer",
    8: "Leo",
    9: "Virgo",
    10: "Libra",
    11: "Scorpio",
    12: "Sagittarius",
  };
}

document
  .getElementById("findHoroscope")
  .addEventListener("click", async function () {
    const birthdayInput = document.getElementById("birthday");
    const birthday = new Date(birthdayInput.value);
    const sunSign = getHoroscope(birthday);

    try {
      const horocopeResult = document.getElementById("horoscopeResult");
      const horosocope = await fetchHoroscope(sunSign);

      horoscopeResult.textConcent = "Your horosocpe for today is ${horosocpe }";
    } catch (error) {
      console.error("Error fethcing horosocpe", error);
    }
  });
