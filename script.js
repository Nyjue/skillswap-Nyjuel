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

// cost calculator
document.getElementById('calc-btn').addEventListener('click', () => {
  const rate = parseFloat(document.getElementById('rate').value);
  const hours = parseFloat(document.getElementById('hours').value);
  const result = document.getElementById('calc-result');

  if (isNaN(rate) || isNaN(hours)) {
    result.textContent = 'Please enter both a rate and hours.';
    return;
  }

  result.textContent = 'Total cost: $' + calculateTotalCost(rate, hours).toFixed(2);
});
// find my match
document.getElementById('match-btn').addEventListener('click', () => {
  const category = document.getElementById('match-category').value;
  const maxPrice = parseFloat(document.getElementById('max-price').value);
  const results = document.getElementById('match-results');

  if (isNaN(maxPrice)) {
    results.textContent = 'Please enter a max price.';
    return;
  }

  const matches = matchSkillsToUser({ category, maxPrice }, skills);
  renderSkills(matches, results);
});