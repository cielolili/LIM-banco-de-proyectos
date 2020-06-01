import MoreImages from '../controllerAPI/MoreImages';

beforeEach(() => {
  fetch.resetMocks();
});
describe('MoreImages', () => {
  it('Debería traer 20 imágenes adicionales al hacer scrroll', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      const data = new Promise((resolve) => {
        resolve({
          json() {
            return { page: 2, query: 'Mickey' };
          },
        });
      });
      return data;
    });
    const response = await MoreImages();
    expect(response.page).toBe(2);
    expect(response.query).toBe('Mickey');
  });
});
