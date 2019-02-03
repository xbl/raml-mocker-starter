const { loadApi } = require('@xbl/raml-mocker');

test('商品列表', async () => {
  const getList = loadApi('商品列表');
  const {status, data: list} = await getList();

  expect(status).toBe(200);
  expect(list[0].productId).toBe('00001');
});

