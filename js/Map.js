(function(){
	window.Map = function(){
		this.mapCode = [
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0],
		[9,9,9,9,9,9,9,9,9,9,9,9]
		]
	}
	Map.prototype.render = function(){
		for(var i = 0; i < 20; i++){
			for(var j = 0; j < 12; j++){
				if(this.mapCode[i][j]!= 0){
					game.setColor(i,j,this.mapCode[i][j])
				}
			}
		}
	}
	Map.prototype.remove = function(){
		for(var i = 0; i < 20; i++){
			// 遍历地图数组，如果数组中的某一行没有0了，就说明这一行都有颜色，就需要删除这一行
			if(this.mapCode[i].indexOf(0) == -1){
				// 删除这一行
				this.mapCode.splice(i,1);
				// 删除一行，再补充一行空的
				this.mapCode.unshift([0,0,0,0,0,0,0,0,0,0,0,0])
				game.score += 10;
				$("h1").html("分数:"+game.score)
			}
		}
	}
})()