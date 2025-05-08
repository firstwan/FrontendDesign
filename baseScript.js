const websites = [
  {
    name: "3D Animation",
    path: "/3DAnimation",
    image: "",
  },
  {
    name: "Animation When Load",
    path: "/AnimationWhenLoad",
    image: "",
  },
  {
    name: "Animation Word",
    path: "/AnimationWord",
    image: "",
  },
  {
    name: "Countdown",
    path: "/Countdown",
    image: "",
  },
  {
    name: "Ecommerce Practice",
    path: "/EcommercePractice",
    image: "",
  },
  {
    name: "Flip Card",
    path: "/FlipCard",
    image: "",
  },
  {
    name: "Image Transitions",
    path: "/ImageTransitions",
    image: "",
  },
  {
    name: "Input Animation",
    path: "/InputAnimation",
    image: "",
  },
  {
    name: "Login Form",
    path: "/LoginForm",
    image: "",
  },
  {
    name: "Neon Button",
    path: "/NeonButton",
    image: "",
  },
  {
    name: "Page Animation",
    path: "/PageAnimation",
    image: "",
  },
  {
    name: "Page Animation 2",
    path: "/PageAnimation2",
    image: "",
  },
  {
    name: "Slideshow",
    path: "/Slideshow",
    image: "",
  },
  {
    name: "Slideshow 2",
    path: "/Slideshow2",
    image: "",
  },
  {
    name: "Text Animation",
    path: "/TextAnimation",
    image: "",
  },
  {
    name: "Text Animation 2",
    path: "/TextAnimation2",
    image: "",
  },
  {
    name: "Video Page Animation",
    path: "/VideoPageAnimation",
    image: "",
  },
]

function generateCardElement() {
  // Get the .row HTML element
  const rowDiv = document.getElementsByClassName("row")[0];

  for (const website of websites) {
    // create col div element
    const colDiv = createElement("div", "col");
    const cardDiv = createElement("div", "card");
    const cardBodyDiv = createElement("div", "card-body");
    const cardTextDiv = createElement("div", "card-text");

    // Create the text content
    const newContent = document.createTextNode(website.name);

    // add the text node to the cardTextDiv
    cardTextDiv.appendChild(newContent);

    // Form the colDiv
    cardBodyDiv.appendChild(cardTextDiv);

    let cardChild = cardBodyDiv;

    // If included path
    if (website.path) {
      const linkElement = createElement("a");
      linkElement.href = website.path;
      linkElement.target = "_blank";

      linkElement.appendChild(cardBodyDiv);

      cardChild = linkElement;
    }

    cardDiv.appendChild(cardChild);
    colDiv.appendChild(cardDiv);
    
    rowDiv.appendChild(colDiv);
  }
}

function createElement(elementType, className) {
  // create element
  const newElement = document.createElement(elementType);
  
  if (className) {
    // Apply class name
    newElement.classList.add(className);
  }

  return newElement;
}

// Generate element when load
document.body.onload = generateCardElement;