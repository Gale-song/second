<template>
	<div>
		<div v-for='item in newList' :key='item.row' class="box">
			<div class="title">{{item.msg.title}}</div>
			<div class="content">{{item.msg.content}}</div>
			<button @click="change" >修改</button>
		</div>


		<!-- <div>{{row}}</div> -->
		<form action="get" id="form" ref='form'>
			title：<input type="txt" id="title">
			<br>
			content：<input type="txt" id="content">
			<button @mouseenter='submit(rowNum-1)'>提交</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: "message",
		props: {
			test: {
				// default:123
			},
			index:{}
		},
		data() {
			return {
				rowNum: 0,
				arr: this.test,
				newList: this.test
			};
		},
		created() {
			// console.log(this.arr)
			var index = this.arr.length-1
			// console.log(this.arr[index].row)
			this.rowNum = this.arr[index].row
			// this.arr.refMsg = String(this.arr.col) + String(this.arr.row);
			// this.arr.refMsg = "new"
		},
		// 不能再beforeCreate中调用data中的数据，还没有完成计算
		// create也因为没有完成挂载，所以不能使用绑定数据
		mounted() {
			// console.log(this.arr)
			// console.log(this.arr)
			// console.log(this.test)
			// console.log(this.$refs.boxMsg);
			// console.log(txt);
			// var boxObj = this.$refs.boxMsg;
			// var aimHeight = boxObj.offsetHeight;
			// boxObj.style.paddingTop = (aimHeight/2)+"px"
			// boxObj.style.paddingBottom = (aimHeight/2)+"px"
			// boxObj.style.left = (this.arr.col-1)*300+"px"
			// console.log(boxObj.offsetHeight);
			// console.log(this.row)
		},
		updated() {

			// var boxObj = this.$refs.boxMsg;
			// var aimHeight = boxObj.offsetHeight/2;
			// console.log(aimHeight)
			// boxObj.style.paddingTop = (aimHeight/2)+"px"
			// boxObj.style.paddingBottom = (aimHeight/2)+"px"
			// boxObj.style.left = (this.arr.col-1)*300+"px"
		},
		methods: {

			change() {
				// console.log(num)
				var formObj = document.getElementById('form')
				
				formObj.style.display = 'block'
				// this.flag = !this.flag
				// console.log(this.flag)
			},
			submit(num) {
				// console.log(num)
				var formObj = document.getElementById('form')
				var inputObj = formObj.getElementsByTagName('input')
				this.newList[num].msg.title = inputObj[0].value
				this.newList[num].msg.content = inputObj[1].value
				// console.log(inputObj[0])
				// console.log(this.content)
				formObj.style.display = 'none'
				// this.flag = !this.flag
			},
			addRow() {
				this.arr = this.newList
				this.newList = []
				// console.log(this.arr[0].col)
				var self = this
				this.arr.forEach(function(item){
					if(item.col === self.arr[0].col){
						// console.log(item)
						self.newList.push(item)
					}
				})
				// console.log(this.arr)
				this.rowNum++
				console.log()
				var rowObj = {
						"col": this.arr[0].col,
						"row": this.rowNum,
						"keyword": "",
						"msg": {
							"title": "",
							"content": ""
						}
					}
				this.newList.push(rowObj)
				// this.arr.rows.push(rowObj)
				// console.log(this.newList)
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.box {
		padding: 36px 0;
		/* display: flex; */
		/* height: 2000px; */
		text-align: center;
		width: 300px;
		position: relative;
	}

	.title {
		box-sizing: border-box;
		cursor: pointer;
		width: 200px;
		font-size: 25px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		display: inline-block;
		border: 1px solid black;
		position: relative;
	}

	.title::after {
		display: block;
		content: "";
		width: 3px;
		height: 20px;
		background: red;
		position: absolute;
		bottom: -21px;
		left: 50%;
		transform: translateX(-50%);
		display: none;
	}

	.content {
		/* box-sizing: border-box; */
		/* position: absolute; */
		/* left: 75px; */
		/* margin: 20px; */
		text-align: left;
		text-indent: 0;
		width: 298px;
		display: block;
		font-size: 20px;
		line-height: 20px;
		border: 1px solid gray;
		display: none;
		position: absolute;
		z-index: 1000;
		background-color: black;
		color: white;
		transform: translateY(20px);
	}

	.box:hover .title::after {
		display: block;
	}

	/* 通过css的伪类选择器只能操作元素本身以及子级元素 */
	.box:hover .content {
		display: block;
	}
	
	#form {
		width: 300px;
		height: 90px;
		line-height: 45px;
		background-color: blue;
		position: fixed;
		top: 30%;
		left: 50%;
		transform: translateX(-50%);
		display: none;
	}
	.box button{
		position: absolute;
		top: 12px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
