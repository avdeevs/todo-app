module.exports = {
  indexHTMLApp: {
    src : 'app/index.html', dest : 'tmp/public/index.html',
    options: { context: { dist: false, test: false } }
  },
  indexHTMLTestApp: {
    src : 'app/index.html', dest : 'tmp/public/index.html',
    options: { context: { dist: false, test: true } }
  }
//  indexHTMLDistApp: {
//    src : 'app/index.html', dest : 'tmp/public/index.html',
//    options: { context: { dist: true, tests: false } }
//  },
//  indexHTMLDistTests: {
//    src : 'app/index.html', dest : 'tmp/public/tests/index.html',
//    options: { context: { dist: true, tests: true } }
//  }
};