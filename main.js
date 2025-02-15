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
  },
]

const packages = [
  {
    id: 1,
    name: "Beru",
    desc: "A software platform used for building applications based on containers. Small and lightweight environments."
  },
  {
    id: 2,
    name: "JinWooGems",
    desc: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
  },
  {
    id: 3,
    name: "Apache Shadow",
    desc: "A default package manager used for the Java programming language and the Java runtime environment."
  },
]


const renderToDom = (divId, toRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = toRender;
  }
  
  if (window.location.href.includes("index.html")) {
  
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

  if(window.location.href.includes("packages.html")) {

  const packDom = (packages) => {
    let packString = ""
    for (const package of packages) {
      packString += `
  
        <div class="packCard w-55">
    <div class="pack-body">
      <h5 class="pack-title">${package.name}</h5>
      <p class="pack-text">${package.desc}</p>
      </div>
    </div>
      
      `
    }
  
    renderToDom("#packRepo", packString)
  }


const form = document.querySelector("form")

const createPack = (e) => {
  e.preventDefault()

    const newPack = {
      id: packages.length + 1,
      name: document.querySelector("#name").value,
      desc: document.querySelector("#desc").value,
  }

  packages.push(newPack);
  packDom(packages);
  form.reset();
}

form.addEventListener("submit", createPack);



const startApp = () => {
  if (window.location.href.includes("packages.html")) {
    packDom(packages)
  }
}
startApp()

}

if(window.location.href.includes("packages.html")) {

  const packDom = (packages) => {
    let packString = ""
    for (const package of packages) {
      packString += `
  
        <div class="packCard w-55">
    <div class="pack-body">
      <h5 class="pack-title">${package.name}</h5>
      <p class="pack-text">${package.desc}</p>
      </div>
    </div>
      
      `
    }
  
    renderToDom("#packRepo", packString)
  }


const form = document.querySelector("form")

const createPack = (e) => {
  e.preventDefault()

    const newPack = {
      id: packages.length + 1,
      name: document.querySelector("#name").value,
      desc: document.querySelector("#desc").value,
  }

  packages.push(newPack);
  packDom(packages);
  form.reset();
}

form.addEventListener("submit", createPack);



const startApp = () => {
  if (window.location.href.includes("packages.html")) {
    packDom(packages)
  }
}
startApp()

}
