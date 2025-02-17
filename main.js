const pinRepos = [
  {
    id: 1,
    name: "Code-crafted-studio",
    desc: "A collection of meticulously crafted code, algorithms, and projects to explore and learn from."
  },
  {
    id: 2,
    name: "Jin-woo-tech-works",
    desc: "A tech workspace for Jin Woo's experiments, including web development, algorithms, and programming projects."
  },
  {
    id: 3,
    name: "Quantum-coder-chronicles",
    desc: "Dive into the realm of quantum computing, machine learning, and experimental code through Jin Woo's lens."
  }
]

const renderToDom = (divId, toRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = toRender;
  }
  
  if (window.location.href.includes("")) {
  
  const pinDom = (pinRepos) => {
    let pinString = ""
    for (const pinRepo of pinRepos) {
      pinString += `

        <div class="pinCard w-55">
    <div class="pin-body">
      <h5 class="pin-title">${pinRepo.name}</h5>
      <p class="pin-text">${pinRepo.desc}</p>
      </div>
    </div>
      
      `
    }
  
    renderToDom("#pinRepo", pinString)
  }
  

  /*const pinForm = () => {
    let pinFormString = `
  
    <div class="pinForm">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="name" placeholder="name" required>
      <label for="floatingInput">Repo Name</label>
    </div>
    <div class="desc-form">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="desc" placeholder="desc" required>
      <label for="floatingInput">Desc.</label>
    </div>
    </div>
    <div class="form-btn">
      <button type="submit" class="btn btn-primary btn-dark" id="form-submit">Create Repo</button>
    </div>
    </div>
      `
  
      renderToDom("#form", pinFormString)
  }*/
  
  const form = document.querySelector("form")
  
  const createPin = (e) => {
    e.preventDefault()
  
      const newPinned = {
        id: pinRepos.length + 1,
        name: document.querySelector("#name").value,
        desc: document.querySelector("#desc").value,
    }
  
    pinRepos.push(newPinned);
    pinDom(pinRepos);
    form.reset();
  }
  
  form.addEventListener("submit", createPin);
  
  const startApp = () => {
    if (window.location.href.includes("index.html")) {
      pinDom(pinRepos)
    }
  }
  startApp()
  
  }



  const repos = [
    {
      id: 1,
      name: "Code-crafted-studio",
      description: "A collection of meticulously crafted code, algorithms, and projects to explore and learn from."
    },
    {
      id: 2,
      name: "Jin-woo-tech-works",
      description: "A tech workspace for Jin Woo's experiments, including web development, algorithms, and programming projects."
    },
    {
      id: 3,
      name: "Quantum-coder-chronicles",
      description: "Dive into the realm of quantum computing, machine learning, and experimental code through Jin Woo's lens."
    },
    {
      id: 4,
      name: "AbyssalDev-Nexus",
      description: "A hub for deep learning, blockchain, and high-performance computing."
    },
    {
      id: 5,
      name: "DimensionalCodeX",
      description: "A repo experimenting with VR, AR, and metaverse development"
    },
    {
      id: 6,
      name: "Eclipse-Codeworks",
      description: "A playground for creative coding, game development, and AI-driven applications."
    }
  ]

  // DOM
  const renderToDom = (divId, toRender) => {
    const SelectedDiv = document.querySelector(divId);
    selectedDiv.innnerHTML = toRender
  };

  // Function to build and display rpos
  const reposDom = (repos) => {
    let domString ="";
  for (const repo of repos) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title">${repo.name}</h4>
      <p class="card-text">${repo.description}</p>
      </div>
    </div>
    `;
  }
  renderToDom("#repoApp", domString);
};

const form = document.querySelector("form");
  

  const createRepo = (e) => {
    e.preventDefault();
  
 // Function to handle form submission and add a new repo
      const newRepo = {
        id: repos.length + 1,
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
    };
  
    repos.push(newRepo);
    reposDom(repos);
    form.reset();
  }
  
  form.addEventListener("submit", createRepo);
  
  const startApp = () => {
    if (window.location.href.includes("repo.html")) {
      reposDom(repos)
    }
  }
  startApp();
  
  

















