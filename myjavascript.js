var str;
document.getElementById('output').value='  ';
function OnClickClear(){         //清空
	str = document.getElementById("output");
	str.value="  ";
}
function OnClickNumber(num){     //获取符号和数值
	str = document.getElementById("output");
	str.value = str.value + num;
}
function OnclickCalculate(){     //计算结果
	str = document.getElementById("output");
	try{
		str.value=" "+eval(str.value);
	}
	catch(err){
		str.value="ERROR(😊)";
	}
}