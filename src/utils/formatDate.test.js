import formatDate from './formatDate';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const mockDate = '2019-10-30T18:10:33.022Z';
    const expectedDate = '30/10/2019';

    const result = formatDate(mockDate);

    expect(result).toBe(expectedDate);
  });
});