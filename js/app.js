const data = {
  "10th": [
    {type:"Notes",icon:"📝",title:"Mathematics Complete Notes",subject:"Mathematics",desc:"Chapter-wise notes and important formulas.",url:"https://www.google.com/search?q=10th+class+mathematics+notes"},
    {type:"Notes",icon:"🔬",title:"Science Study Material",subject:"Science",desc:"Physics, Chemistry and Biology revision notes.",url:"https://www.google.com/search?q=10th+class+science+notes"},
    {type:"Video",icon:"▶️",title:"10th Maths YouTube Lessons",subject:"Mathematics",desc:"Find chapter-wise video explanations.",url:"https://www.youtube.com/results?search_query=10th+class+maths"},
    {type:"PYQ",icon:"📄",title:"10th Previous Papers",subject:"All Subjects",desc:"Practice previous examination papers.",url:"https://www.google.com/search?q=10th+class+previous+year+question+papers"}
  ],
  "Inter": [
    {type:"Notes",icon:"📝",title:"Intermediate Mathematics",subject:"Maths",desc:"First and second year mathematics resources.",url:"https://www.google.com/search?q=intermediate+mathematics+notes"},
    {type:"Notes",icon:"⚛️",title:"Physics Notes",subject:"Physics",desc:"Concept notes, formulas and revision material.",url:"https://www.google.com/search?q=intermediate+physics+notes"},
    {type:"Video",icon:"▶️",title:"Intermediate YouTube Lessons",subject:"All Subjects",desc:"Search chapter-wise video lectures.",url:"https://www.youtube.com/results?search_query=intermediate+classes"},
    {type:"PYQ",icon:"📄",title:"Inter Previous Papers",subject:"All Subjects",desc:"Solve previous year papers for practice.",url:"https://www.google.com/search?q=intermediate+previous+year+question+papers"}
  ],
  "B.Tech": [
    {type:"Notes",icon:"💻",title:"Data Structures Notes",subject:"CSE",desc:"Arrays, linked lists, trees, graphs and algorithms.",url:"https://www.google.com/search?q=BTech+data+structures+notes"},
    {type:"Notes",icon:"⚙️",title:"Compiler Design Notes",subject:"CSE",desc:"Lexical analysis, parsing and code generation.",url:"https://www.google.com/search?q=BTech+compiler+design+notes"},
    {type:"Video",icon:"▶️",title:"B.Tech CSE Lectures",subject:"CSE",desc:"Find engineering lectures and tutorials.",url:"https://www.youtube.com/results?search_query=BTech+CSE+lectures"},
    {type:"PYQ",icon:"📄",title:"B.Tech Previous Papers",subject:"Engineering",desc:"Practice university previous year questions.",url:"https://www.google.com/search?q=BTech+previous+year+question+papers"}
  ]
};

const channels = [
  {name:"Neso Academy",category:"Engineering & CS",desc:"Useful computer science and engineering explanations.",url:"https://www.youtube.com/@nesoacademy"},
  {name:"freeCodeCamp.org",category:"Programming",desc:"Long-form programming and technology courses.",url:"https://www.youtube.com/@freecodecamp"},
  {name:"Khan Academy",category:"School & Maths",desc:"Free lessons across mathematics and science.",url:"https://www.youtube.com/@khanacademy"}
];

let currentLevel = "10th";

function selectLevel(level, button){
  currentLevel = level;
  document.querySelectorAll(".level-card").forEach(x=>x.classList.remove("active"));
  button.classList.add("active");
  document.getElementById("resourceTitle").textContent = level + " Class Resources";
  document.getElementById("searchInput").value = "";
  document.getElementById("typeFilter").value = "all";
  renderResources();
}

function renderResources(){
  const query = document.getElementById("searchInput").value.toLowerCase();
  const type = document.getElementById("typeFilter").value;
  const items = data[currentLevel].filter(r =>
    (type === "all" || r.type === type) &&
    `${r.title} ${r.subject} ${r.desc}`.toLowerCase().includes(query)
  );
  document.getElementById("resourceGrid").innerHTML = items.length ? items.map(r => `
    <article class="resource-card">
      <div class="resource-icon">${r.icon}</div>
      <span class="tag">${r.type}</span>
      <h3>${r.title}</h3>
      <strong>${r.subject}</strong>
      <p>${r.desc}</p>
      <a href="${r.url}" target="_blank" rel="noopener">Open Resource →</a>
    </article>
  `).join("") : "<p>No resources found. Try another search.</p>";
}

function renderPYQ(){
  document.getElementById("pyqGrid").innerHTML = ["10th","Inter","B.Tech"].map(level => `
    <article class="pyq-card">
      <span class="tag">${level}</span>
      <h3>${level} PYQ Collection</h3>
      <p>Keep previous year question papers here, organized by subject and year.</p>
      <a class="btn secondary" href="#resources" onclick="selectLevel('${level}', document.querySelectorAll('.level-card')[${["10th","Inter","B.Tech"].indexOf(level)}])">Explore</a>
    </article>
  `).join("");
}

function renderChannels(){
  document.getElementById("channelGrid").innerHTML = channels.map(c => `
    <article class="channel-card">
      <span class="tag">${c.category}</span>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <a href="${c.url}" target="_blank" rel="noopener">Visit Channel →</a>
    </article>
  `).join("");
}

function toggleMenu(){
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "72px";
  nav.style.right = "0";
  nav.style.background = "#fff";
  nav.style.padding = "20px";
}

renderResources();
renderPYQ();
renderChannels();
