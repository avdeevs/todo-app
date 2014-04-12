module.exports = {
  // Puts gathers files in `tmp/public`
  assemble: {
    files: [{
      expand: true,
      cwd: 'public/',
      src: ['**'],
      dest: 'tmp/public/'
    }, {
      src: ['vendor/**/*.js', 'vendor/**/*.css'],
      dest: 'tmp/public/'
    }]
  },

  dist: {
    files: [{
      expand: true,
      cwd: 'tmp/public',
      src: ['**', '!coverage'],
      dest: 'build/public'
    }]
  },

  test: {
    files: [{
      expand: true,
      cwd: 'tmp/public',
      src: ['**', '!coverage'],
      dest: 'tmp/test/public'
    }]
  }
};
