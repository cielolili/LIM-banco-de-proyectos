import SearchData from '../controllerAPI/SearchData';

beforeEach(() => {
  fetch.resetMocks();
});
describe('SearchData', () => {
  it('Debería filtrar según la query que se introduzca en el input', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      const data = new Promise((resolve) => {
        resolve({
          json() {
            return { query: 'Mickey' };
          },
        });
      });
      return data;
    });
    const response = await SearchData();
    expect(response.query).toBe('Mickey');
  });
});
