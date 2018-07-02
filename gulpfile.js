"use strict"
const gulp=require("gulp"),
    uglify=require("gulp-uglify"),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin');
    // del = require("del");
//2.定义gulp自动化任务
//把webapp目录下的所有html文件，复制到dist目录下
gulp.task("copy",function () {
    gulp.src("./webapp/*.html")//找到源文件
        .pipe(gulp.dest("./dist"));//一个步骤：复制文件到指定目录
});
//2）把js文件压缩后，复制到dist/js文件夹下
//1.压缩js文件   2复制文件
gulp.task("compressjs",function () {
    gulp.src("./webapp/js/common.js")
        .pipe(uglify())//借助uglify插件对当前js文件进行压缩
        .pipe(gulp.dest("./dist/webapp/js")) ;//复制文件了
})
gulp.task("compresshtml",function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('./webapp/*.ejs')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./dist/webapp'));
})
gulp.task('compresscss', function() {
    // 1. 找到文件
    return  gulp.src('./webapp/css/*.css')
    // 2. 压缩文件
        .pipe(cleanCSS())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('./dist/webapp/css'));
});