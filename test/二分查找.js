let array = [];
for(let i = 0;i <= 2400001;i ++){
	array.push(i);
}
let result = count2(2400001,array);
console.log(result);

function count(name,array){  //二分查找
	let min = 0;
	let max = array.length;
	let mid,d = 0;
	while(min < max){
		d ++;
		mid = Math.floor((min + max) / 2);
		if(array[mid] < name){
			min = mid;
		}else if(array[mid] > name){
			max = mid;
		}else{
			return {
				"索引":mid, //查找到的索引
				"值":array[mid], //查找到的值
				"查找了":d + "次" //统计计数
			};
		}
	}

}


function count2 (name,array){  //普通查找
	let d = 0;
	for(let i = 0;i < array.length;i ++){
		d ++;
		if(array[i] === name){
			return {
				"索引":i, //查找到的索引
				"值":array[i], //查找到的值
				"查找了":d + "次" //统计计数
			}
		}
	}
}
