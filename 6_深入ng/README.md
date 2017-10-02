### 指令总结

		ng-app        	范围；引入模块
		
		ng-model      	双向绑定    数据<->UI
		
		ng-bind       	输出
		
		ng-事件       		ng-click/dblclick/mousedown...
		
		ng-init       	初始化
		
		ng-controller 	控制器


		ng-show/hide  显示隐藏    block/none
		
		ng-if         元素是否存在


		ng-src		不报错
		
		ng-href


		ng-style
		  	<div style="width:200px;height:200px;background:#ccc;">
		  	style={width: '200px', height: '200px', background: '#ccc'}
		
		  	style="{{a}}"
		  	ng-style="json"
		
		ng-class
		  	<div class="aaa bbb ccc">
		  	class=['aaa', 'bbb', 'ccc']
		
		  	class="{{a}}"
		  	ng-class="[...]"


		ng-cloak      没加载完之前，先隐藏


		ng-value    	value="xxx"
		
		ng-readonly 	readonly		禁止用户输入
		
		ng-selected 	selected		默认显示哪个
		
		ng-disabled 	disabled		默认不能点选
		
		ng-checked  	checked			默认选中


		ng-switch
		  	switch(xxx){
		    	case xxx:
		      	break;
		    	case xxx:
		      	break;
		  	}
		
	  	ng-switch="xxx"
	  	ng-switch-when="xxx"


		ng-jq           指定另一个jq兼容库作为angular内部使用


		ng-bind         输出，把HTML按照文字输出
		
		ng-bind-html    输出，把HTML本身输出到页面
		  	*$sce.trustAsHtml(html代码)
		  	
		  	用依赖项$sce的trustAsHtml包一下
			1.6.4 有这问题，低版本没有问题
		
		ng-bind-template
			ng-bind-template="sfassdasf{{z}}dswerr{{a}}"


		ng-include      包含一个文件
		  	ng-include="a"
		  	ng-include="'1.html'"
		  	
		  	*注意地址——localhost


		ng-options      <select>
		  	ng-options="值 as 字 for xxx in arr"
		
	  		ng-options——替你组织option
		  	1.必须有ng-model
		  	2.值   as 字 for item in arr
		
		group
		
		值   as 字 group by 分类依据   for 名字 in 数组
		
		item.id as item.name group by item.type for item in arr
		
		[{id: 1, name: '北京', type: '直辖市'}, 
		{id: 2, name: '上海', type: '直辖市'}, 
		{id: 3, name: '深圳', type: '直辖市'}, 
		{id: 4, name: '武汉', type: '省会'}, 
		{id: 5, name: '郑州', type: '河南省'}, 
		{id: 6, name: '洛阳', type: '河南省'}]


		<ng-form name="xxx">
		
		</ng-form>


		表单校验：
		1.改用ng-form
		  <form></form>           ×
		  <ng-form></ng-form>     √
		  
		2.ng-form要加name
		
		3.每个表单元素需要ng-model
		
		4.校验的结果
		  form1.email.$error
