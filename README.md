## Angular
### Angular的核心是数据

### 解决ng做post请求的方法

```
	let commonMod=angular.module('common', []);
	commonMod.config(function ($httpProvider){
	  $httpProvider.defaults.transformRequest=function (obj){
	    let arr=[];
	
	    for(let name in obj){
	      arr.push(`${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}`);
	    }
	
	    return arr.join('&');
	  };
	  $httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
	});
```

> encodeURIComponent( )函数

> 作用：可把字符串作为URI组件进行编码

> 说明：

	1.该方法不会对 ASCII字母和数字进行编码，也不会对这些 ASCII标点符号进行编码：- _ . ! ~ * ' ( )
	
	2.其他字符（比如 ：; / ? : @ & = + $ , # 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的
	
	3.encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号
