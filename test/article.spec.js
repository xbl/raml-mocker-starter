const path = require('path');
const assert = require('assert');
const { loadApi, initProject } = require('@xbl/raml-mocker');

it('从文章列表到文章详情', async () => {
  const getList = loadApi('文章列表');
  const { status, data: list } = await getList();
  const articleId = list[0].articleId;

  assert.equal(status, 200);
  assert.equal(articleId, 'A00001');

  const getDetail = loadApi('文章详情');
  const { data: detail } = await getDetail({ id: articleId });
  assert.equal(detail.title, '提升家里整体格调的小物件');
});
