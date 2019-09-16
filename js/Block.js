(function(){
	window.Block = function(){
		//得到随机的方块
		// 第一步要罗列出所有方块所有的形状
		var allType = ["S","T","O","L","J","I","Z"];
		// 第二步，随机出一种形状
		this.type = allType[parseInt(Math.random() * allType.length)];
		// 第三步得到随机的方块形状的总方向数量，因为每一种方块的方向数量不同，比如O只有一种，再比如T有四种，所以要得到每一个形状总方向数量
		this.alldir = fangkuai[this.type].length;
		// 第四步，随机得到当前方块形状的一个方向
		this.dir = parseInt(Math.random() * this.alldir);
		//第五步，得到随机的方块
		this.code = fangkuai[this.type][this.dir];
		// 初始的方块行和列
		// 初始化的行
		this.row = 0;
		// 初始化的列
		this.col =4;
	}
	Block.prototype.render = function(){
		// this.code四行四列的数组进行遍历
		for(var i = 0; i < 4; i++){
			for(var j = 0; j < 4; j++){

				// 判断数组中每一项，如果有一项不是0，就渲染这一项
				if(this.code[i][j] != 0){
					game.setColor(i+this.row,j+this.col,this.code[i][j])
				}
			}
		}
	}
	Block.prototype.check = function(row,col){
		// 提出的方法，作用就是判断方块和地图这个两个位置时是否挨着
		for(var i = 0; i < 4; i++){
			for(var j = 0; j < 4; j++){
				if(this.code[i][j] != 0 && game.map.mapCode[i+row][j+col] != 0){
					return false;
				}
			}
		}
		return true;
	}
	Block.prototype.checkDown = function(){
		//判断方块下落
		if(this.check(this.row+1,this.col)){
			this.row++;
		}else{
			// 当方块下落停止之后
			// 产生新的方块
			game.block = new Block();
			// 将方块的数据，给到地图
			this.xuanrandaohuabu()
			// 判断是否消行
			game.map.remove()
			this.goDie()
		}
	}
	Block.prototype.checkLeft = function(){
		// 判断方块左移
		if(this.check(this.row,this.col-1)){
			this.col--;
		}
	}
	Block.prototype.checkRight = function(){
		// 判断方块右移
		if(this.check(this.row,this.col+1)){
			this.col++;
		}
	}
	Block.prototype.checkDaodi = function(){
		while(this.check(this.row+1,this.col)){
			this.row++;
		}
	}
	Block.prototype.xuanrandaohuabu = function(){
		for(var i = 0; i < 4; i++){
			for(var j = 0; j < 4; j++){
				// 将方块有颜色的数据给地图
				if(this.code[i][j] != 0){
					game.map.mapCode[this.row + i][this.col + j] = this.code[i][j];
				}
			}
		}
	}
	Block.prototype.checkRot = function(){
		// 备份一下旧的，没有问题的方向
		var oldDir = this.dir;
		// 方向变化
		this.dir++;
		console.log(this.dir)
		// 判断方向的范围，不要超过所有方向的总数
		if(this.dir > this.alldir-1){
			this.dir = 0;
		}

		// 将方块渲染新的方向
		this.code = fangkuai[this.type][this.dir];
		//判断方块和地图是否有重合
		if(!this.check(this.row,this.col)){
			// 这里就说明方块和地图有重合了
			this.dir = oldDir;
			// 再将方块渲染回旧的方向
			this.code = fangkuai[this.type][this.dir];
		}
	}
	Block.prototype.goDie = function(){
		// 判断死亡
			for(var i = 0; i < 12; i++){
				if(game.map.mapCode[0][i] != 0){
					clearInterval(game.timer);
					alert("GAME OVER!! 您的总分数为"+game.socre+"分")
				}
			}
	}
})()