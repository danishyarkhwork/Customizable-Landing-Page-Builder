// Allow drop on the canvas
function allowDrop(event) {
  event.preventDefault();
}

// Handle element drop
function drop(event) {
  event.preventDefault();
  var dataType = event.dataTransfer.getData("type");

  var element;
  switch (dataType) {
    case "text":
      element = document.createElement("p");
      element.textContent = "This is a text element";
      element.classList.add("p-2", "bg-gray-100", "mt-2");
      break;
    case "image":
      element = document.createElement("img");
      element.src = "https://via.placeholder.com/150";
      element.alt = "Placeholder Image";
      element.classList.add("mt-2");
      break;
    case "button":
      element = document.createElement("button");
      element.textContent = "Click Me!";
      element.classList.add(
        "bg-blue-500",
        "text-white",
        "p-2",
        "rounded",
        "mt-2"
      );
      break;
    case "form":
      element = document.createElement("form");
      var input = document.createElement("input");
      input.type = "email";
      input.placeholder = "Enter your email";
      input.classList.add("border", "p-2", "w-full", "mt-2");
      var submit = document.createElement("button");
      submit.type = "submit";
      submit.textContent = "Submit";
      submit.classList.add(
        "bg-blue-500",
        "text-white",
        "p-2",
        "rounded",
        "mt-2"
      );
      element.appendChild(input);
      element.appendChild(submit);
      break;
  }
  if (element) {
    document.getElementById("canvas").appendChild(element);
  }
}

// Handle dragging
document.querySelectorAll(".draggable").forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("type", event.target.getAttribute("data-type"));
  });
});

// Handle export
document.getElementById("export-button").addEventListener("click", function () {
  const canvas = document.getElementById("canvas");
  const exportedHTML = canvas.innerHTML;

  document.getElementById("exported-html").value = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Landing Page</title>
  <link href="https://cdn.tailwindcss.com" rel="stylesheet">
</head>
<body class="bg-gray-100">
  <div class="container mx-auto p-8">
    ${exportedHTML}
  </div>
</body>
</html>`;

  document.getElementById("exportModal").classList.remove("hidden");
});

// Close export modal
document.getElementById("close-export").addEventListener("click", function () {
  document.getElementById("exportModal").classList.add("hidden");
});
