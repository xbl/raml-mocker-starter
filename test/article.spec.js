const assert = require('assert');
const { loadApi } = require('@xbl/raml-mocker');

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

describe('参数化测试示例', () => {
  [
    {id: 'A00001', title: '提升家里整体格调的小物件'},
    {id: 'A00002', title: '提升家里整体格调的小物件'},
  ].forEach((params) => {
    it(`根据文章id "${params.id}" 获取文章详情，文章的标题应为 "${params.title}"`, async () => {
      const getDetail = loadApi('文章详情');
      const { data: detail } = await getDetail({ id: params.id });
      assert.equal(detail.title, params.title);
    });
  });
});
