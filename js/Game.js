(function(){
	window.Game = function(){
		
		//初始化
		this.init()
		// 实例方块
		this.block = new Block()
		//实例地图
		this.map = new Map()
		// 键盘事件
		this.bindEvent()
		// 定时器的主循环体
		this.start()
		// 分数
		this.score = 0;
	}
	Game.prototype.init = function(){
		// 函数的内容就是初始化页面的内容，就是表格
		for(var i = 0; i < 20; i++){
			var $tr = $("<tr></tr>");
			for(var j = 0; j < 12; j++){
				var $td = $("<td></td>");
				$td.appendTo($tr)
			}
			$tr.appendTo("table");
		}
	}
	Game.prototype.setColor = function(row,col,n){
		$("tr").eq(row).children("td").eq(col).addClass("c"+n)
	}
	Game.prototype.bindEvent = function(){
		var self = this;
		//键盘监听
	 $(document).keydown(function(event) {
			if(event.keyCode == 37){
				// 判断左移
				self.block.checkLeft()
			}else if(event.keyCode == 39){
				// 判断右移
				self.block.checkRight()
			}else if(event.keyCode == 32){
				self.block.checkDaodi()
			}else if(event.keyCode == 38){
				self.block.checkRot()
			}
		});
	}
	Game.prototype.clear = function(){
		for(var i = 0; i < 20; i++){
			for(var j = 0; j < 12; j++){
				$("tr").eq(i).children("td").eq(j).removeClass()
			}
		}
	}
	Game.prototype.start = function(){
		var self = this;
		this.timer = setInterval(function(){
			// 清屏
			self.clear()
			// 渲染方块
			self.block.render()
			// 渲染地图
			self.map.render()
			self.block.checkDown()
		},500)
	}
})()