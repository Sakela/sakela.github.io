module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                '*.js'
            ]
        },
        cssbeautifier: {
            files: ['css/style.css'],
            options : {
                indent: '    ',
                openbrace: 'end-of-line',
                autosemicolon: false
            }
        },
        jsbeautifier: {
            files: ["js/*.js", "!js/jQuery.js"]
        },
        prettify: {
            options: {
                "indent": 4,
                "condense": true,
                "indent_inner_html": true,
                "unformatted": ["a", "pre"]
            },
            files: ["index.html"]
        }
    });

    grunt.registerTask('default', [
        'jsbeautifier',
        'jshint',
        'cssbeautifier',
        'prettify'
    ]);
};
