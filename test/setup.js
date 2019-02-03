const path = require('path');
const { initProject } = require('@xbl/raml-mocker');

before(() => {
  initProject(path.resolve(__dirname, '../'));
})
