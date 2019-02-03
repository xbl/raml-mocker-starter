const { loadApi } = require('@xbl/raml-mocker');

test('从文章列表到文章详情', async () => {
  const getList = loadApi('文章列表');
  const {status, data: list} = await getList();
  const articleId = list[0].articleId;

  expect(status).toBe(200);
  expect(articleId).toBe('A00001');

  const getDetail = loadApi('文章详情');
  const { data: detail } = await getDetail({id: articleId});
  expect(detail.title).toBe('提升家里整体格调的小物件');
});
