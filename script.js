// Sample career stories for this AI-assisted concept prototype.
// These profiles are fictional and are only included to demonstrate the interface.
const stories = [
  {
    id: 1,
    title: "Frontend Developer",
    person: "Maya Chen",
    role: "Early-career developer",
    field: "Technology",
    experience: "Early career",
    interests: ["Building things", "Creative problem-solving"],
    major: "Computer Science",
    icon: "⌘",
    initials: "MC",
    bg: "#e7eee3",
    avatar: "#c7dbc8",
    summary:
      "Turning ideas into useful, accessible interfaces — one small feature at a time.",
    journey:
      "Maya started by customizing simple web pages and sharing them with friends. A class project helped her discover that she enjoyed making technology easier to use. She built a small portfolio, asked for feedback, and landed her first junior role.",
    takeaway:
      '<span class="takeaway-highlight">You do not need to know everything before you start. Build small projects, explain your decisions, and keep improving them.</span>',
  },
  {
    id: 2,
    title: "UX / Product Designer",
    person: "Jordan Rivera",
    role: "Design team member",
    field: "Design",
    experience: "Early career",
    interests: ["Creative problem-solving", "Helping people"],
    major: "Design / Human-Computer Interaction",
    icon: "✳",
    initials: "JR",
    bg: "#f4e8dc",
    avatar: "#edc9a8",
    summary:
      "Connecting what people need with products that feel clear and intuitive.",
    journey:
      "Jordan was interested in art but also curious about why some apps felt easy and others felt frustrating. Interviewing classmates for a school project introduced them to user research and prototyping.",
    takeaway:
      '<span class="takeaway-highlight">Curiosity is a design skill. Learn to ask good questions before deciding what to build.</span>',
  },
  {
    id: 3,
    title: "Data Analyst",
    person: "Sam Patel",
    role: "Analyst at a growing company",
    field: "Business",
    experience: "Starting out",
    interests: ["Working with data", "Creative problem-solving"],
    major: "Economics / Statistics / Business",
    icon: "▥",
    initials: "SP",
    bg: "#e4eaf4",
    avatar: "#c5d2e8",
    summary:
      "Finding patterns in messy information and helping teams make better decisions.",
    journey:
      "Sam liked puzzles but did not initially picture a data career. A spreadsheet-heavy internship led to learning SQL and data visualization. Their first portfolio project answered a practical question about customer behavior.",
    takeaway:
      '<span class="takeaway-highlight">A clear explanation of what the numbers mean can be just as valuable as the analysis itself.</span>',
  },
  {
    id: 4,
    title: "Registered Nurse",
    person: "Alex Morgan",
    role: "Newer healthcare professional",
    field: "Healthcare",
    experience: "Early career",
    interests: ["Helping people"],
    major: "Nursing",
    icon: "＋",
    initials: "AM",
    bg: "#f4e7e9",
    avatar: "#e7c4cb",
    summary:
      "Combining clinical knowledge, teamwork, and human connection during important moments.",
    journey:
      "Alex explored healthcare through volunteering and conversations with nurses. Clinical rotations helped them understand the pace of the work and the importance of communicating clearly with patients and colleagues.",
    takeaway:
      '<span class="takeaway-highlight">Talk with people in the field and look for realistic ways to experience the day-to-day work before committing.</span>',
  },
  {
    id: 5,
    title: "IT Support Specialist",
    person: "Taylor Brooks",
    role: "First technology role",
    field: "Technology",
    experience: "Starting out",
    interests: ["Helping people", "Building things"],
    major: "Information Technology / Computer Science",
    icon: "⌘",
    initials: "TB",
    bg: "#e4efed",
    avatar: "#c2dcd6",
    summary:
      "Solving everyday tech problems and helping people feel confident using their tools.",
    journey:
      "Taylor enjoyed troubleshooting computers for family and friends. They turned that interest into a first IT support job, where documenting fixes and learning from experienced teammates helped them grow.",
    takeaway:
      '<span class="takeaway-highlight">A first job does not have to be your forever job. It can be a foundation for your next step.</span>',
  },
  {
    id: 6,
    title: "Small Business Owner",
    person: "Chris Okafor",
    role: "Career changer",
    field: "Business",
    experience: "Career changer",
    interests: ["Building things", "Creative problem-solving"],
    major: "Many paths; practical experience matters",
    icon: "↗",
    initials: "CO",
    bg: "#f3edda",
    avatar: "#e4d49c",
    summary:
      "Turning a personal interest into a service, learning business skills along the way.",
    journey:
      "Chris spent several years in an office role before testing a weekend side project. Early customer conversations helped shape the service. Over time, they learned pricing, budgeting, and how to manage uncertainty.",
    takeaway:
      '<span class="takeaway-highlight">Test a small version of an idea and learn from real feedback before making a big leap.</span>',
  },
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const field = document.getElementById("field");
const experience = document.getElementById("experience");
const interest = document.getElementById("interest");
const count = document.getElementById("count");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close");

function renderStories() {
  const query = search.value.trim().toLowerCase();

  const matchingStories = stories.filter((story) => {
    const searchableText = [
      story.title,
      story.person,
      story.role,
      story.field,
      story.major,
      story.summary,
      ...story.interests,
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!query || searchableText.includes(query)) &&
      (!field.value || story.field === field.value) &&
      (!experience.value || story.experience === experience.value) &&
      (!interest.value || story.interests.includes(interest.value))
    );
  });

  count.textContent = `${matchingStories.length} ${
    matchingStories.length === 1 ? "story" : "stories"
  }`;

  if (matchingStories.length === 0) {
    grid.innerHTML =
      '<div class="empty"><strong>No stories match those filters.</strong><p>Try another search or reset the filters to explore all paths.</p></div>';
    return;
  }

  grid.innerHTML = matchingStories
    .map(
      (story) => `
      <article class="story">
        <div class="story-top" style="--card-bg:${story.bg}; --avatar-bg:${story.avatar}">
          <div class="avatar" aria-hidden="true">${story.initials}</div>
          <div class="story-icon" aria-hidden="true">${story.icon}</div>
        </div>
        <div class="story-body">
          <div class="pills">
            <span class="pill">${story.field}</span>
            <span class="pill">${story.experience}</span>
          </div>
          <h3>${story.title}</h3>
          <div class="person">${story.person} · ${story.role}</div>
          <p>${story.summary}</p>
          <div class="story-footer">
            <span>Major: ${
              story.major.length > 29
                ? `${story.major.slice(0, 27)}…`
                : story.major
            }</span>
            <button class="read-link" type="button" data-id="${story.id}">
              Read story ↗
            </button>
          </div>
        </div>
      </article>`,
    )
    .join("");
}

function openStory(id) {
  const story = stories.find((item) => item.id === Number(id));
  if (!story) return;

  document.getElementById("modal-field").textContent =
    `${story.field} · ${story.experience}`;

  document.getElementById("modal-title").textContent = story.title;

  document.getElementById("modal-person").textContent =
    `${story.person} — ${story.role}`;

  document.getElementById("modal-content").innerHTML = `
    <p>${story.summary}</p>
    <p>${story.journey}</p>
    <div class="takeaway">
      <strong>One thing to remember</strong><br>
      ${story.takeaway}
    </div>
    <p>
      <strong>Related major or study area:</strong> ${story.major}<br>
      <strong>Interests:</strong> ${story.interests.join(", ")}
    </p>`;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  closeButton.focus();
}

function closeStory() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

[search].forEach((element) =>
  element.addEventListener("input", renderStories),
);

[field, experience, interest].forEach((element) =>
  element.addEventListener("change", renderStories),
);

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (button) openStory(button.dataset.id);
});

closeButton.addEventListener("click", closeStory);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeStory();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeStory();
});

document.getElementById("reset").addEventListener("click", () => {
  search.value = "";
  field.value = "";
  experience.value = "";
  interest.value = "";

  renderStories();
  document.getElementById("stories").scrollIntoView({
    behavior: "smooth",
  });
});

renderStories();