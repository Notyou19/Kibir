const ESP32_URL =
  "http://192.168.1.10/rfid";

async function getRFID() {

  try {

    const response =
      await fetch(ESP32_URL);

    const data =
      await response.json();

    document.getElementById("status")
      .innerText =
      "UID: " + data.uid;

  } catch (err) {

    document.getElementById("status")
      .innerText =
      "ESP32 tidak terhubung";

  }
}

setInterval(getRFID, 1000);
