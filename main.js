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
  
  const pinProjects = [
    {
      id: 1,
      name: "beru",
      desc: "A software platform used for building applications based on containers. Small and lightweight environments."
    },
    {
      id: 2,
      name: "latanier",
      desc: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
    },
    {
      id: 3,
      name: "Apache Shadow",
      desc: "A default package manager used for the Java programming language and the Java runtime environment."
    },
  ]
  
  //Utility Function
  const renderToDom = (divId, toRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = toRender;
    }
    
    //render our pinned repositories and projects
    const pinDom = (pinRepos) => {
      let pinString = ""

      for (const pinRepo of pinRepos) {
        pinString += 
        `<div class="pinCard w-55">
          <div class="pin-body">
            <h5 class="pin-title">${pinRepo.name}</h5>
            <p class="pin-text">${pinRepo.desc}</p>
          </div>
        </div>`
      }
    
      renderToDom('#pinRepo', pinString)
    }

    const pinProjectsOnDom = (pinProj) => {
      let pinString = ""

      for (const pinProjects of pinProj) {
        pinString += 
        `<div class="pinCard w-55">
          <div class="pin-body">
            <h5 class="pin-title">${pinProjects.name}</h5>
            <p class="pin-text">${pinProjects.desc}</p>
          </div>
        </div>`
      }
    
      renderToDom('#pinProj', pinString)
    }
    
    
    //render our pinForm
    const pinForm = () => {
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
    
        renderToDom('#pinForm', pinFormString)
    }
    
    
    const gitNavBarFilter = () => {
      const domString = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button id="overview"><a class="nav-link active" aria-current="page" href="#">Overview</a></button>
          </li>
          <li class="nav-item">
            <button id="repositories"><a class="nav-link" href="#">Repositories</a></button>
          </li>
          <li class="nav-item" id="pinProjss">
            <button id="projects"><a class="nav-link" href="#">Projects</a></button>
          </li>
          <li class="nav-item">
            <button id="packages"><a class="nav-link" href="#">Packages</a></button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div class="repo-section" id="pinRepos">
    <input type="text" class="repo-search" id="repo-search" placeholder="Find a repository">
    <div id="pinRepo"></div>
  </div>
  <div class="proj-section" id="pinProjs">
    <input type="text" class="project-search" id="repo-search2" placeholder="Find a Project">
    <div id="pinProj"></div>
  </div>
  <div class="form-section">
    <h3>Create a new repository</h3>
    <div id="pinForm"></div>
  </div>`;
  
      renderToDom('#flex-column', domString)
    }
    
    //Event Listeners
    const eventListeners = () => {
      document.querySelector("#overview").addEventListener("click", () => {
        console.log("Overview Clicked")
        document.querySelector("#pinRepos").classList.remove("removeButton")
        document.querySelector("#pinProjs").classList.remove("removeButton")
        document.querySelector("#repo-search").classList.add("removeButton")
        document.querySelector("#repo-search2").classList.add("removeButton")
      })
      
      document.querySelector("#repositories").addEventListener("click", () => {
        //console.log("Repositories Clicked")
        document.querySelector("#pinRepos").classList.remove("removeButton")
        document.querySelector("#pinProjs").classList.toggle("removeButton")
        document.querySelector("#repo-search").classList.remove("removeButton")
      
      })
      
      document.querySelector("#projects").addEventListener("click", (e) => {
        //console.log("Projects Clicked")
        e.preventDefault(e);
        document.querySelector("#pinRepos").classList.toggle("removeButton")
        document.querySelector("#pinProjs").classList.remove("removeButton")
        document.querySelector("#repo-search2").classList.remove("removeButton")
      })
        
      document.querySelector("#packages").addEventListener("click", () => {
        console.log("Packages Clicked")
        
      })
      
      //Form Submission Event Listener and creation of new repository
      document.querySelector("#form-submit").addEventListener("click", (e) => {
        console.log("Form Submitted")
        e.preventDefault(e);

      const newPinned = {
        id: pinRepos.length + 1,
        name: document.querySelector("#name").value,
        desc: document.querySelector("#desc").value,
      }

      pinRepos.push(newPinned);
      pinDom(pinRepos);
      //document.querySelector(".pinForm").reset();
    })
    }
    
    const startApp = () => {
    gitNavBarFilter();// Render the navigation bar
    pinProjectsOnDom(pinProjects);  // Render the pinned projects
    pinDom(pinRepos);  // Render the pinned repositories
    pinForm();  // Render the form
    
    // Event Listeners for the dom elements: Always Last to call this function, because HTML needs to be fully loaded
    eventListeners();
   // document.querySelector("#navBarFilter").addEventListener("submit", createPin);
  }

document.addEventListener('DOMContentLoaded', startApp);

  /*
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


  //const form = document.querySelector("form")

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
  }*/
