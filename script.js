document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM LOADED");

  const featuresBtn = document.getElementById("btn-features");
  const capabilitiesBtn = document.getElementById("btn-capabilities");
  const practicesBtn = document.getElementById("btn-practices");
  const tabContent = document.getElementById("tab-content");

  const removeActive = function () {
    featuresBtn.classList.remove("active");
    practicesBtn.classList.remove("active");
    capabilitiesBtn.classList.remove("active");
  };

  const features = [
    //features
    [
      "Use Descriptive Variable and Function Names",
      "Keep Functions Small and Focused",
      "Prefer const and let over var",
      "Avoid Global Variables",
      "Write Modular Code",
    ],
    //capabilities
    [
      "Asynchronous Programming",
      "DOM Manipulation",
      "Event Handling",
      "Frameworks and Libraries",
      "APIs and AJAX",
    ],

    //practices
    [
      "Use Meaningful and Consistent Naming Conventions",
      "Keep Functions Short and Focused",
      "Avoid Global Variables",
      "Use Promises or Async/Await for Asynchronous Code",
      "Write Unit Tests",
    ],
  ];

  featuresBtn.addEventListener("click", function () {
    removeActive();
    featuresBtn.classList.add("active");
  });
  featuresBtn.addEventListener("click", function () {
    removeActive();
    capabilitiesBtn.classList.add("active");
  });
  featuresBtn.addEventListener("click", function () {
    removeActive();
    practicesBtn.classList.add("active");
  });
});
