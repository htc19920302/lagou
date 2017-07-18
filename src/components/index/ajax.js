const Send = function (url,success,error){
	var xhr = new XMLHttpRequest();//创建核心对象;

	xhr.open("get",url);//建立连接

	xhr.send();//发送请求

	xhr.onreadystatechange = function (){
		if(xhr.readyState === 4 ){
			if(xhr.status === 200){
				var data = xhr.responseText;
			if (data.dataType === "json")
					data = JSON.parse(data);
				// 处理响应数据逻辑
				success && success(data);
			} else { // 失败
				error && error(xhr.statusText);
			
			}
		}
	}


}

export default Send
