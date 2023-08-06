function getHoroscope(birthdate) {
  const month = birthdate.getMonth() + 1;
  const day = birthdate.getDate();

  const horoscopes = {
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

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return horoscopes[4];
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return horoscopes[5];
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return horoscopes[6];
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return horoscopes[7];
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return horoscopes[8];
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return horoscopes[9];
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return horoscopes[10];
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return horoscopes[11];
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return horoscopes[12];
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return horoscopes[1];
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return horoscopes[2];
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return horoscopes[3];
  } else {
    return "Invalid date";
  }
}

function fetchHoroscope(sign, day) {
  const apiUrl = `https://aztro.sameerkumar.website?sign= <sign> &day= <day>`;

  return fetch(apiUrl, { method: "POST" })
    .then((response) => response.json())
    .then((data) => data.description);
}

document
  .getElementById("findHoroscope")
  .addEventListener("click", async function () {
    const birthdayInput = document.getElementById("birthday");
    const birthday = new Date(birthdayInput.value);
    const sunSign = getHoroscope(birthday);

    try {
      const horoscopeResult = document.getElementById("horoscopeResult");
      const horoscope = await fetchHoroscope(sunSign, "today");

      horoscopeResult.textContent = "Your horoscope for today is ${horoscope }";
    } catch (error) {
      console.error("Error fetching horoscope", error);
    }
  });
