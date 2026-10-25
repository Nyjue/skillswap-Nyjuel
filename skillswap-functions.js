function calculateTotalCost(hourlyRate, hours) {
  return hourlyRate * hours;
}

if (typeof module !== 'undefined') {
  module.exports = {
    filterSkillsByCategory,
    calculateTotalCost,
    calculateTotalCosts: calculateTotalCost
  };
}

describe('matchSkillsToUser', () => {
  const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'JavaScript Help', category: 'Programming', price: 25 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 }
  ];

  test('matches by category and price', () => {
    expect(matchSkillsToUser({ category: 'Programming', maxPrice: 30 }, skills)).toEqual([
      { title: 'Python Tutoring', category: 'Programming', price: 20 },
      { title: 'JavaScript Help', category: 'Programming', price: 25 }
    ]);
  });

  test('filters by max price', () => {
    expect(matchSkillsToUser({ category: 'Programming', maxPrice: 20 }, skills)).toEqual([
      { title: 'Python Tutoring', category: 'Programming', price: 20 }
    ]);
  });

  test('returns an empty array when nothing matches', () => {
    expect(matchSkillsToUser({ category: 'Cooking', maxPrice: 100 }, skills)).toEqual([]);
  });

  test('includes free skills', () => {
    expect(matchSkillsToUser({ category: 'Career', maxPrice: 0 }, skills)).toEqual([
      { title: 'Resume Review', category: 'Career', price: 0 }
    ]);
  });
});