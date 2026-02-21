let total = document.getElementById("total");
let thriving = document.getElementById("thriving");
let struggling = document.getElementById("struggling");
let currentStatus = 'all'

let thrivingList = [];
let strugglingList = [];

const allCardSection = document.getElementById("all-card");
const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

const allFilterBtn = document.getElementById("all-filter-button");
const thrivingFilterBtn = document.getElementById("thriving-filter-button");
const strugglingFilterBtn = document.getElementById("struggling-filter-button");

function calculateCount() {
  total.innerText = allCardSection.children.length;
  thriving.innerText = thrivingList.length;
  struggling.innerText = strugglingList.length;
}

calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.add("bg-gray-200", "text-black");
  thrivingFilterBtn.classList.add("bg-gray-200", "text-black");
  strugglingFilterBtn.classList.add("bg-gray-200", "text-black");

  allFilterBtn.classList.remove("bg-black", "text-white");
  thrivingFilterBtn.classList.remove("bg-black", "text-white");
  strugglingFilterBtn.classList.remove("bg-black", "text-white");

  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.remove("bg-gray-200", "text-black");
  selected.classList.add("bg-black", "text-white");



  if(id === 'thriving-filter-button'){
    allCardSection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    renderThriving();
  }
  else if(id === 'all-filter-button'){
    allCardSection.classList.remove('hidden');
    filteredSection.classList.add('hidden');
  }
  else if(id === 'struggling-filter-button'){
    allCardSection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    renderStruggling();
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("thriving-btn")) {
    const prtNode = event.target.parentNode.parentNode;
    const plantName = prtNode.querySelector(".plant-name").innerText;
    const latinName = prtNode.querySelector(".latin-name").innerText;
    const light = prtNode.querySelector(".light").innerText;
    const water = prtNode.querySelector(".water").innerText;
    const status = prtNode.querySelector(".status").innerText;
    const notes = prtNode.querySelector(".notes").innerText;

    prtNode.querySelector('.status').innerText='Thrive';

    const cardInfo = {
      plantName,
      latinName,
      light,
      water,
      status: 'Thrive',
      notes,
    };

    const plantExist = thrivingList.find((item) => item.plantName === cardInfo.plantName);

    // status.classList.add('bg-green-200')


    if (!plantExist) {
      thrivingList.push(cardInfo);
    }

    strugglingList = strugglingList.filter(item=> item.plantName != cardInfo.plantName)

    calculateCount();
    if(currentStatus === 'struggling-filter-button'){
        renderStruggling();
    }

  }
  else if(event.target.classList.contains("struggling-btn")){
        const prtNode = event.target.parentNode.parentNode;
    const plantName = prtNode.querySelector(".plant-name").innerText;
    const latinName = prtNode.querySelector(".latin-name").innerText;
    const light = prtNode.querySelector(".light").innerText;
    const water = prtNode.querySelector(".water").innerText;
    const status = prtNode.querySelector(".status").innerText;
    const notes = prtNode.querySelector(".notes").innerText;

    prtNode.querySelector('.status').innerText='Struggle';

    const cardInfo = {
      plantName,
      latinName,
      light,
      water,
      status: 'Struggle',
      notes,
    };

    const plantExist = strugglingList.find((item) => item.plantName === cardInfo.plantName);

    // status.classList.add('bg-green-200')


    if (!plantExist) {
      strugglingList.push(cardInfo);
    }

    thrivingList = thrivingList.filter(item=> item.plantName != cardInfo.plantName)
    if(currentStatus==='thriving-filter-button'){
        renderThriving();
    }


    calculateCount();
  }
});

function renderThriving() {
  filteredSection.innerHTML = "";
  for (let thrive of thrivingList) {
    let div = document.createElement("div");
    div.className = "card flex justify-between border p-8";
    div.innerHTML = `
        <div class="space-y-6">
          <!-- main-part-1 -->
          <div>
            <p class="plant-name text-4xl">${thrive.plantName}</p>
            <p class="latin-name">Latin Name</p>
          </div>

          <!-- main-part-2 -->
          <div class="flex gap-2">
            <p class="light bg-gray-200 px-5 py-2">Bright Indicate</p>
            <p class="water bg-gray-200 px-5 py-2">Weekly</p>
          </div>

          <!-- main-part-3 -->
          <div>
            <p class="status">${thrive.status}</p>
            <p class="notes">New leaf unfurling by the east window</p>
          </div>

          <!-- main-part-4 -->
          <div class="flex gap-5">
            <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
            <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
          </div>
        </div>
        <!-- right -->
        <div>
          <button class="delete-btn bg-red-200 text-red-600 px-4 py-2">Delete</button>
        </div>
        `;
        filteredSection.appendChild(div);
  }
}

function renderStruggling() {
  filteredSection.innerHTML = "";
  for (let struggle of strugglingList) {
    let div = document.createElement("div");
    div.className = "card flex justify-between border p-8";
    div.innerHTML = `
        <div class="space-y-6">
          <!-- main-part-1 -->
          <div>
            <p class="plant-name text-4xl">${struggle.plantName}</p>
            <p class="latin-name">${struggle.latinName}</p>
          </div>

          <!-- main-part-2 -->
          <div class="flex gap-2">
            <p class="light bg-gray-200 px-5 py-2">Bright Indicate</p>
            <p class="water bg-gray-200 px-5 py-2">Weekly</p>
          </div>

          <!-- main-part-3 -->
          <div>
            <p class="status">${struggle.status}</p>
            <p class="notes">New leaf unfurling by the east window</p>
          </div>

          <!-- main-part-4 -->
          <div class="flex gap-5">
            <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
            <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
          </div>
        </div>
        <!-- right -->
        <div>
          <button class="delete-btn bg-red-200 text-red-600 px-4 py-2">Delete</button>
        </div>
        `;
        filteredSection.appendChild(div);
  }
}

