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