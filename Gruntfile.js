module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        sass: {
            dist: {
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        typescript: {
            base: {
                src: ['ts/main.ts'],
                dest: 'js/main.js',
                options: {
                    target: 'es5', //or es3
                    base_path: 'ts',
                    sourcemap: true,
                    fullSourceMapPath: false,
                    declaration: false
                }
            }
        },
        watch: {
            css: {
                files: ['sass/*'],
                tasks: ['sass']
            },
            js: {
                files: ['ts/**/*'],
                tasks: ['typescript']
            }
        }
    });

//    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-contrib-jshint');
//    grunt.loadNpmTasks('grunt-contrib-qunit');
//    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('test', ['jshint', 'qunit']);

    //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
    grunt.registerTask('default', ['sass', 'typescript']);

};