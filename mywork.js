var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// menuscript
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

//work list
let projectList = {

  0: {
    "projectTitle": "CoinBase clone",
    "description": "Project Coinbase UI is a user interface designed specifically for the Coinbase cryptocurrency platform. It provides a streamlined and intuitive interface for buying, selling, and managing cryptocurrencies on the Coinbase platform.",
    "link":"learn more"
  },
  1: {
    "projectTitle": "Weather-trends",
    "description": "Weather-trends is a website that provides weather information for various cities using modern visual elements such as SVG's. It displays various parameters of the environment, including current weather conditions, UV index and visibility which can be useful when planning outdoor activities. ",
    "link":"https://weather-trends-teller.netlify.app"
  },
  2: {
    "projectTitle": "A Pod by NASA",
    "description": "A POD by NASA is web application that allows users to view high-definition images of celestial bodies such as planets, galaxies, neutron stars, asteroids, and black holes captured by NASA's cameras. It serves as an educational tool for users to learn and explore the vastness of space.",
    "link": "https://apodbynasa.netlify.app"    
  },
  4: {
    "projectTitle": "NFT Marketplace",
    "description": "Developed NFT marketplace with multiple chains that support multiple ERC-20 Tokens, and a platform for digital currency exchange of custom ERC-20 tokens built on the Ethereum blockchain.",
    "link":"learn more"
  },  
  5: {
    "projectTitle": "Movie Recommendation System",
    "description": "A Movie Recommendation System using Streamlit and Python is a web application that uses machine learning algorithms to recommend movies to users based on their preferences.",
    "link": "learn more"
  },
  6: {
    "projectTitle": "Memories using MERN stack",
    "description": "A full stack web application where people from all around the world can add the most fascinating places they have visited. With email and Google Authentication, Pagination, Search, and Filtering capabilities, and at the end, it is mobile responsive",
    "link":"learn more"
  }
}

//to create the element and display the data inside
let projectListDiv = document.getElementById('projects-list');
for (let project in projectList) {
  let innerdiv = document.createElement('div'); //second div without class
  innerdiv.className = "innerdiv";

  let projectTitle = document.createElement('span');
  let projectTitleTextNode = document.createTextNode(projectList[project].projectTitle);
  projectTitle.setAttribute('title', projectList[project].projectTitle);
  projectTitle.className = "project-list-font";
  projectTitle.appendChild(projectTitleTextNode);

  let projectShortDescription = document.createElement('p');
  let projectShortDescriptionText = document.createTextNode(projectList[project].description);
  projectShortDescription.setAttribute('title', "Hover to see description");
  projectShortDescription.appendChild(projectShortDescriptionText);

  let learnMoreLinkAnchor = document.createElement('a');
  learnMoreLinkAnchor.setAttribute("href", projectList[project].link);
  let learnMoreLinkAnchorIcon = document.createElement('i');
  learnMoreLinkAnchorIcon.classList = "fa-solid fa-up-right-from-square link-icon";
  learnMoreLinkAnchor.appendChild(learnMoreLinkAnchorIcon);

  let learnMoreLinkAnchorText = document.createTextNode("visit site");
  // learnMoreLinkAnchor.appendChild(learnMoreLinkAnchorText);

  // appending all the main elements
  innerdiv.appendChild(projectTitle);
  // innerdiv.appendChild(projectShortDescription);
  innerdiv.appendChild(learnMoreLinkAnchor);

  projectListDiv.appendChild(innerdiv);
}