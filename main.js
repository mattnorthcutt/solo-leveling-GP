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

















