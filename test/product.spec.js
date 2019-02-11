const assert = require('assert');
const { loadApi } = require('@xbl/raml-mocker');

it('获取商品列表', async () => {
  const getList = loadApi('商品列表');
  const {status, data: list} = await getList();

  assert.equal(status,200);
  assert.equal(list[0].productId,'00001');
});

