var data=[
	{
		id:1,
		title:'新列表1',
		color:'#6DD63A',
		todo:[{
			t:'中午12点开会',done:false
			},{
			t:'中午12点开会',done:false
		    },{
		    t:'中午12点开会',done:true
		    }]
	},
	{
		id:2,
		title:'新列表2',
		color:'#FF8710',
		todo:[{t:'中午11点开会',done:false},{t:'中午11点开会',done:true},{t:'中午11点开会',done:true}]
	}
]
var colors=['#6DD63A','#FF8710','#CA72DF','#FF2D6B','#F7C40D','#9B844E']
var app=angular.module('app',[]);
app.controller('c',function($scope){
	$scope.colors=colors;
	$scope.data=data;
	$scope.index=0;
	$scope.showFlag=false;
	// 左侧+号新增
	$scope.add=function(){
		var i=$scope.data[$scope.data.length-1].id+1;
		$scope.data.push({
			id:i,
			title:'新列表'+i,
			color:colors[$scope.data.length%6],
			todo:[]
		});
		$scope.index=$scope.data.length-1;
	}
	// 单击左侧选择列表
	$scope.select=function(i){
		$scope.index=i;
	}
	// 单击选项
	$scope.option=function(){
		$scope.changeTitle=$scope.data[$scope.index].title;
		$scope.changeColor=$scope.data[$scope.index].color;
		$scope.showFlag=!$scope.showFlag;
	}
	// 单击选项-删除
	$scope.del=function(i){
		$scope.data.splice($scope.index,1);
		$scope.index=0;
		$scope.showFlag=false;
	}
	// 单击选项-改变颜色
	$scope.changeC=function(v){
		$scope.changeColor=v;
	}
	// 单击选项-完成
	$scope.complete=function(){
		$scope.data[$scope.index].title=$scope.changeTitle;
		$scope.data[$scope.index].color=$scope.changeColor;
		$scope.showFlag=false;
	}
	// 点击新项目
	$scope.newTitle=function(){
		$scope.data[$scope.index].todo.push(
			{t:'中午12点开会',done:false}
		);
	}
	// 点击修改文本
	$scope.changeTitle=function(even,ev){
		ev.t=even.target.innerText;
		console.log(ev.t)
	}
});