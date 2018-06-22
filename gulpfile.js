
//导入工具包 require('node_modules里对应模块')
var gulp        = require('gulp');
var less        = require('gulp-less');
var htmlmin     = require('gulp-htmlmin');
var cleanCSS    = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var useref      = require('gulp-useref');
var copy        = require('gulp-copy');

// 压缩html
gulp.task('testHtmlmin', ['testUseref'], function () {  // 先修改引用路径，再压缩
    var options = {
        removeComments: true,                 //清除HTML注释
        collapseWhitespace: true,             //压缩HTML
        collapseBooleanAttributes: true,      //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,          //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,     //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"
        minifyJS: true,                       //压缩页面JS
        minifyCSS: true                       //压缩页面CSS
    };
    return gulp.src('dist/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});

// 复制图片
gulp.task('copy', function () {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
});

// 编译less
gulp.task('testLess', function () {
    return gulp.src('src/less/*.less')  //该任务针对的文件
        .pipe(less())                   //该任务调用的模块
        .pipe(gulp.dest('src/css'));    //将会在src/css下生成index.css
});

// 压缩css
gulp.task('testCssmin', ['testLess'], function () { // 先执行testLess任务后再执行cssmin任务，必须加上rutrun才能异步
    return gulp.src('src/css/*.css')
        .pipe(concat('libs.min.css'))    // 先合并css后再压缩
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

// 压缩js
gulp.task('jsmin', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('libs.min.js'))    // 先合并js后再压缩
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// 修改html的引用地址
gulp.task('testUseref', function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

// watch暂时先不启动

// // watch监听less文件 自动执行less编辑后压缩
// gulp.task('watchLess', function () {
//     gulp.watch('src/less/*.less', ['testCssmin']);
// });
//
// // watch监听js，有更改就输出log
// gulp.task('watchJs', function () {
//     gulp.watch('src/js/*.js', function (event) {
//         console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//     });
// });

// 执行定义任务
gulp.task('default',[
  'copy',
  'jsmin',
  'testCssmin',
  'testHtmlmin'
  // 'watchLess',
  // 'watchJs'
]);
