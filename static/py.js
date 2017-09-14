var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  pythonPath: 'python',
  pythonOptions: [],
  scriptPath: './',
  args: []
};

PythonShell.run('hello.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});
