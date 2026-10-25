const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'JavaScript Help', category: 'Programming', price: 25 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Piano Basics', category: 'Music', price: 18 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Mock Interviews', category: 'Career', price: 10 }
];

function renderSkills(list, container) {
  container.innerHTML = '';

  if (list.length === 0) {
    container.textContent = 'No skills found.';
    return;
  }

  list.forEach(skill => {
    const card = document.createElement('article');
    const title = document.createElement('h3');
    title.textContent = skill.title;
    const info = document.createElement('p');
    info.textContent = skill.category + ' - ' + (skill.price === 0 ? 'Free' : '$' + skill.price + '/hr');
    card.append(title, info);
    container.appendChild(card);
  });
}

// filter buttons
const skillList = document.getElementById('skill-list');

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    const filtered = filterSkillsByCategory(skills, button.dataset.category);
    renderSkills(filtered, skillList);
  });
});

renderSkills(skills, skillList);