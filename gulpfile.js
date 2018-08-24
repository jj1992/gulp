//导入所需要的插件
var gulp = require('gulp'); //导入gulp插件
var uglify = require("gulp-uglify"); //导入压缩JS插件
var rename = require("gulp-rename"); //导入重命名插件
var concat = require('gulp-concat'); //导入全并文件插件 
//创建并发布任务
gulp.task("test",function(){
	console.log("hello world");
})

//创建并发布任务
gulp.task("js",function(){
	gulp.src("./src/js/*.js").pipe(uglify()).pipe(concat("all.js"))
	//.pipe(rename({suffix : ".min"})).
	.pipe(gulp.dest('dist'));
})
//创建并发布监听任务
gulp.task("default",function(){
	gulp.watch('./src/js/*.js',['js']);
})
