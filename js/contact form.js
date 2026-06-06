
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let district = document.getElementById("district").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let text =
`*New Contact Request*

👤 Name: ${name}
📧 Email: ${email}
🌍 District: ${district}
📱 Phone: ${phone}

📝 Requirements:
${message}`;

    let whatsappNumber = "919828676243";

    let url =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});
