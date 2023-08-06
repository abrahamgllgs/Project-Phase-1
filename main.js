console.log("main.js connected");

function getHoroscope(birthdate) {
  const month = birthdate.getMonth() + 1;
  const day = birthdate.getDate();
}
const getHoroscopeSign = async () => {
  const horoscopeSignApiURL =
    "https://aztro.sameerkumar.website?sign=aries&day=today"; // Replace with the desired sign and day

  try {
    const response = await fetch(horoscopeSignApiURL);
    const data = await response.json(); // Await the response.json()
    console.log("data: ", data);
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
};
await getHoroscopeSign();
document.getElementById("findHoroscope").addEventListener("click", function () {
  const birthdayInput = document.getElementById("birthday");
  const birthday = new Date(birthdayInput.value);
});
