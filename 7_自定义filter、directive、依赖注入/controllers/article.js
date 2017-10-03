angular.module('articleMod', [])
.controller('articleController', function ($scope, $routeParams){
	switch($routeParams.type){
		case 'sport':
			$scope.arr=['体育1', '体育2', '体育3', '体育4', '体育5', '体育6'];
			break;
		case 'game':
			$scope.arr=['游戏1', '游戏2', '游戏3', '游戏4', '游戏5', '游戏6'];
			break;
		case 'news':
			$scope.arr=['新闻1', '新闻2', '新闻3', '新闻4', '新闻5', '新闻6'];
			break;
	}
});