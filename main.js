const repos = [
  {
    id: 1,
    name: "Code-crafted-studio",
    description: "A collection of meticulously crafted code, algorithms, and projects to explore and learn from."
  },
  {
    id: 2, 
    name: "Eclipse-Codeworks",
    description: "A playground for creative coding, game development, and AI-driven applications."
  },
  {
    id: 3,
    name: "Pixel-pioneer-projects",
    description: "Explore creative coding projects that combine design, development, and the art of programming."
  },
  {
    id: 4,
    name: "ShadowTech-forge",
    description: "A collection of projects exploring AI, automation, and next-gen coding solutions."
  }
]

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

  const packages = [
    {
      id: 1,
      name: "Igris",
      desc: "A package manager for Javascript, included with Node.js. Igris makes it easy for developers to share and reuse code."
    },
    {
      id: 2,
      name: "ShadowGet",
      desc: "A free and open source package manager used for the Microsoft development platforms including .NET."
    },
    {
      id: 3,
      name: "Monarchs",
      desc: "A single place for your team to manage Docker images and decide who can see and access your images."
    },
    {
      id: 4,
      name: "ShadowRuby",
      desc: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
    }
  ]
  
  //Utility Function
  const renderToDom = (divId, toRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = toRender;
    }
    
    //render our packages, repositories, pinned repositories, and projects
    const packDom = (packages) => {
      let packString = ""
      for (const package of packages) {
        packString += `

      <div class="pinCard w-55">
        <div class="pin-body">
          <h5 class="pin-title">${package.name}</h5>
          <p class="pin-text">${package.desc}</p>
        </div>
      </div>

        `
      }

      renderToDom("#pinPack", packString)
    }

    const reposDom = (repos) => {
      let domString = ""

      for (const repo of repos) {
        domString += 
        `<div class="repoCard w-55">
          <div class="repo-body">
            <h5 class="repo-title">${repo.name}</h5>
            <p class="repo-text">${repo.description}</p>
          </div>
        </div>`
      }
    
      renderToDom('#repos', domString)
    }

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

    const pinProjectsOnDom = (pinProjects) => {
      let pinString = ""
    
      for (const pinProject of pinProjects) {
        pinString += 
        `<div class="pinCard w-55">
          <div class="pin-body">
            <h5 class="pin-title">${pinProject.name}</h5>
            <p class="pin-text">${pinProject.desc}</p>
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
        <label for="floatingInput">Repository Name</label>
      </div>
      <div class="desc-form">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="desc" placeholder="desc" required>
        <label for="floatingInput">Description</label>
      </div>
      </div>
      <div class="form-btn">
        <button type="submit" class="btn btn-primary btn-dark" id="form-submit">Create Repository</button>
      </div>
      </div>
        `
      
        renderToDom('#pinForm', pinFormString)
    }

    //Pin Form for creating a new project
    const pinProjForm = () => {
      let pinFormString = `
    
      <div class="pinForm">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="proj-name" placeholder="name" required>
        <label for="floatingInput">Proj Name</label>
      </div>
      <div class="desc-form">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="proj-desc" placeholder="desc" required>
        <label for="floatingInput">Desc.</label>
      </div>
      </div>
      <div class="form-btn">
        <button type="submit" class="btn btn-primary btn-dark" id="form-submit-2">Create Pinned Project</button>
      </div>
      </div>
        `
      
        renderToDom('#pinProjForm', pinFormString)
    }

    const packForm = () => {
      let packString = `
    
      <div class="pinForm">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="packName" placeholder="name" required>
        <label for="floatingInput">Package Name</label>
      </div>
      <div class="desc-form">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="packDesc" placeholder="desc" required>
        <label for="floatingInput">Desc.</label>
      </div>
      </div>
      <div class="form-btn">
        <button type="submit" class="btn btn-primary btn-dark" id="form-submit-3">Create Package</button>
      </div>
      </div>
        `
      
        renderToDom('#packageForm', packString)
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
  
  <div class="repo-section" id="repos-container">
    <input type="text" class="repo-search" id="repo-search" placeholder="Find a repository">
    <div id="repos"></div>
  </div>

<div class="repo-section" id="pinRepos">
    <input type="text" class="repo-search" id="pinRepo-search" placeholder="Find a Repository">
    <div id="pinRepo"></div>
  </div>
  
  <div class="proj-section" id="pinProjs">
    <input type="text" class="project-search" id="repo-search2" placeholder="Find a Project">
    <div id="pinProj"></div>
  </div> 

  <div class="pack-section" id="pinPacks">
    <input type="text" class="project-search" id="pack-search" placeholder="Find a Package">
    <div id="pinPack"></div>
  </div> 

  <div class="form-section" id="formSection">
    <h3>Create a new Repository</h3>
    <div id="pinForm"></div>
  </div>

  <div class="form-section" id="formSection2">
    <h3>Create a new Project</h3>
    <div id="pinProjForm"></div>
  </div>
  
  <div class="form-section" id="formSection3">
    <h3>Create a new Package</h3>
    <div id="packageForm"></div>
  </div>`;

  
  
      renderToDom('#flex-column', domString)
    }
    
    //Event Listeners
    const eventListeners = () => {
      
        document.querySelector("#pinRepo-search").classList.add("removeButton")
        document.querySelector("#repo-search").classList.add("removeButton")
        document.querySelector("#repo-search2").classList.add("removeButton")
        document.querySelector("#formSection").classList.add("removeButton")
        document.querySelector("#formSection2").classList.add("removeButton")
        document.querySelector("#repos").classList.add("removeButton")
        document.querySelector("#repos-container").classList.add("removeButton")
        document.querySelector("#pinPack").classList.add("removeButton")
        document.querySelector("#packageForm").classList.add("removeButton")
        document.querySelector("#pinPacks").classList.add("removeButton")
        document.querySelector("#formSection3").classList.add("removeButton")
        
      
      document.querySelector("#overview").addEventListener("click", () => {
        console.log("Overview Clicked")
        document.querySelector("#pinRepos").classList.remove("removeButton")
        document.querySelector("#pinProjs").classList.remove("removeButton")
        document.querySelector("#repo-search").classList.add("removeButton")
        document.querySelector("#pinRepo-search").classList.add("removeButton")
        document.querySelector("#repo-search2").classList.add("removeButton")
        document.querySelector("#formSection").classList.add("removeButton")
        document.querySelector("#formSection2").classList.add("removeButton")
        document.querySelector("#repos").classList.add("removeButton")
        document.querySelector("#repos-container").classList.add("removeButton")
        document.querySelector("#pinPack").classList.add("removeButton")
        document.querySelector("#packageForm").classList.add("removeButton")
        document.querySelector("#pinPacks").classList.add("removeButton")
      })
      
      document.querySelector("#repositories").addEventListener("click", () => {
        //console.log("Repositories Clicked")
        document.querySelector("#pinRepos").classList.add("removeButton")
        document.querySelector("#pinProjs").classList.add("removeButton")
        document.querySelector("#pinRepo-search").classList.add("removeButton")
        document.querySelector("#formSection").classList.remove("removeButton")
        document.querySelector("#formSection2").classList.add("removeButton")
        document.querySelector("#repos").classList.remove("removeButton")
        document.querySelector("#repo-search").classList.remove("removeButton")
        document.querySelector("#repo-search2").classList.add("removeButton")
        document.querySelector("#repos-container").classList.remove("removeButton")
        document.querySelector("#pinPack").classList.add("removeButton")
        document.querySelector("#packageForm").classList.add("removeButton")
        document.querySelector("#pinPacks").classList.add("removeButton")
        document.querySelector("#formSection3").classList.add("removeButton")
      })
      
      document.querySelector("#projects").addEventListener("click", () => {
        //console.log("Projects Clicked")
        document.querySelector("#pinRepos").classList.add("removeButton")
        document.querySelector("#pinProjs").classList.remove("removeButton")
        document.querySelector("#repo-search2").classList.remove("removeButton")
        document.querySelector("#formSection").classList.add("removeButton")
        document.querySelector("#formSection2").classList.remove("removeButton")
        document.querySelector("#repos").classList.add("removeButton")
        document.querySelector("#repo-search").classList.add("removeButton")
        document.querySelector("#pinRepo-search").classList.add("removeButton")
        document.querySelector("#repos-container").classList.add("removeButton")
        document.querySelector("#pinPack").classList.add("removeButton")
        document.querySelector("#packageForm").classList.add("removeButton")
        document.querySelector("#pinPacks").classList.add("removeButton")
        document.querySelector("#formSection3").classList.add("removeButton")
      })
        
      document.querySelector("#packages").addEventListener("click", () => {
        console.log("Packages Clicked")
        document.querySelector("#pinRepos").classList.add("removeButton")
        document.querySelector("#pinProjs").classList.add("removeButton")
        document.querySelector("#pinRepo-search").classList.add("removeButton")
        document.querySelector("#formSection").classList.add("removeButton")
        document.querySelector("#formSection2").classList.add("removeButton")
        document.querySelector("#repos").classList.add("removeButton")
        document.querySelector("#repo-search").classList.add("removeButton")
        document.querySelector("#repo-search2").classList.add("removeButton")
        document.querySelector("#repos-container").classList.add("removeButton")
        document.querySelector("#pinPack").classList.remove("removeButton")
        document.querySelector("#packageForm").classList.remove("removeButton")
        document.querySelector("#pinPacks").classList.remove("removeButton")
        document.querySelector("#formSection3").classList.remove("removeButton")
      })
      
      //Form Submission Event Listener and creation of new repository
      document.querySelector("#form-submit").addEventListener("click", (e) => {
        console.log("Form Submitted")
        //e.preventDefault(e);

      const newPinned = {
        id: pinProjects.length + 1,
        name: document.querySelector("#name").value,
        desc: document.querySelector("#desc").value,
      }
      const newPinned2 = {
        id: pinRepos.length + 1,
        name: document.querySelector("#name").value,
        desc: document.querySelector("#desc").value,
      }
      
      
      pinRepos.push(newPinned2);
      pinDom(pinRepos);
      //document.querySelector(".pinForm").reset();
    })

    //Form Submission Event Listener and creation of new project
    document.querySelector("#form-submit-2").addEventListener("click", () => {
      console.log("Proj Form Submitted")
      //e.preventDefault(e);
      
      const newPinned = {
        id: pinProjects.length + 1,
        name: document.querySelector("#proj-name").value,
        desc: document.querySelector("#proj-desc").value,
      }
      
      pinProjects.push(newPinned);
      pinProjectsOnDom(pinProjects);
    })

    document.querySelector("#form-submit-3").addEventListener("click", () => {
      console.log("Pack Form Submitted")
      //e.preventDefault(e);
      
      const newPack = {
        id: packages.length + 1,
        name: document.querySelector("#packName").value,
        desc: document.querySelector("#packDesc").value,
      }
      
      packages.push(newPack);
      packDom(packages);
    })
    /*
    //Form Submission Event Listener and creation of new project
    document.querySelector("#form-submit2").addEventListener("click", () => {
      console.log("Form2 Submitted")
      //e.preventDefault(e);

    const newProject = {
      id: pinProjects.length + 1,
      name: document.querySelector("#name").value,
      desc: document.querySelector("#desc").value,
    }

    pinProjects.push(newProject);
    pinProjectsOnDom(pinProjects);
    //document.querySelector(".pinForm").reset();
  })*/

    }
    
    const startApp = () => {
    gitNavBarFilter();// Render the navigation bar
    reposDom(repos); // Render the repos
    pinProjectsOnDom(pinProjects);  // Render the pinned projects
    pinDom(pinRepos);  // Render the pinned repositories
    pinForm();  // Render the form
    pinProjForm();
    packDom(packages) 
    packForm() // Render the form
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
