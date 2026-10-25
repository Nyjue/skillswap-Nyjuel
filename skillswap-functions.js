describe('calculateTotalCost', () => {
  test('returns the correct total for different rates and hours', () => {
    expect(calculateTotalCost(20, 2)).toBe(40);
    expect(calculateTotalCost(30, 3)).toBe(90);
  });

  test('handles free sessions (0 rate)', () => {
    expect(calculateTotalCost(0, 3)).toBe(0);
  });

  test('handles zero hours', () => {
    expect(calculateTotalCost(20, 0)).toBe(0);
  });

  test('handles decimal hours', () => {
    expect(calculateTotalCost(25, 1.5)).toBe(37.5);
  });
});