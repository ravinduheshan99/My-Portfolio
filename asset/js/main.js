// ***** **** *** ** * SCROLL SECTION ACTIVE LINK * ** *** **** *****

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// ***** **** *** ** * PROJECT SECTION * ** *** **** *****

// Select all open popup buttons
const openPopupBtns = document.querySelectorAll(".open-popup-btn");

// Loop through each open popup button and attach event listener
openPopupBtns.forEach((btn, index) => {
  // Select corresponding popup and overlay
  const popup = document.getElementById(`popup${index + 1}`);
  const overlay = document.getElementById("overlay");

  // Attach click event listener to open popup button
  btn.addEventListener("click", () => {
    // Display popup and overlay
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  // Select close popup button
  const closePopupBtn = popup.querySelector(".close-popup-btn");

  // Attach click event listener to close popup button
  closePopupBtn.addEventListener("click", () => {
    // Hide popup and overlay
    popup.style.display = "none";
    overlay.style.display = "none";
  });

  // Attach click event listener to overlay to close popup when clicked outside of it
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      // Hide popup and overlay
      popup.style.display = "none";
      overlay.style.display = "none";
    }
  });
});

// ***** **** *** ** * LETTER TYPED JS * ** *** **** *****

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ["Full-stack Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  };

  const multiTextElement = document.querySelector(".multiple-text");
  let currentTextIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    const fullText = options.strings[currentTextIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;

    let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 2; // Faster when deleting
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % options.strings.length;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});

var txtName = document.getElementById("txt-name");
var lbl1 = document.getElementById("lbl-name-1");
var lbl2 = document.getElementById("lbl-name-2");

// Function to handle changes in the input field
function handleInputChange() {
  if (txtName.value === "") {
    lbl1.style.visibility = "visible"; // Show lbl1
    lbl2.style.visibility = "hidden"; // Hide lbl2
  } else {
    lbl1.style.visibility = "hidden"; // Hide lbl1
    lbl2.style.visibility = "visible"; // Show lbl2
  }
}

// Add event listeners for input and click events
txtName.addEventListener("input", handleInputChange);
txtName.addEventListener("click", handleInputChange);

// Initially call handleInputChange to set initial visibility
handleInputChange();
