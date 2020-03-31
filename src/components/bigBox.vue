<template>
	<div class="bigBox"  >
		<button @click='addRow' class="add">添加行</button>
		<message :test="newList" ref='msg' ></message>
	</div>
</template>

<script>
	import message from "./message.vue";
	export default {
		data() {
			return {
				keywords: '',
				flag: true,
				needCol: this.col,
				rowNum: 2,
				newList:JSON.parse(JSON.stringify(this.test)),
				// 需要深拷贝来实现独立化
				arr: JSON.parse(JSON.stringify(this.test))
			};
		},
		methods: {
			addRow() {
				// console.log(this.needCol)
				this.$refs.msg.addRow()
				// this.arr = this.newList
				// this.newList = []
				// console.log(this.arr)
				// var self = this
				// this.arr.forEach(function(item){
				// 	if(item.col === 1){
				// 		console.log(item)
				// 		self.newList.push(item)
				// 	}
				// })
				// // console.log(this.arr)
				// this.rowNum++
				// // console.log(this.rowNum)
				// var rowObj = {
				// 		"col": 1,
				// 		"row": this.rowNum,
				// 		"keyword": "",
				// 		"msg": {
				// 			"title": "",
				// 			"content": ""
				// 		}
				// 	}
				// this.newList.push(rowObj)
				// // this.arr.rows.push(rowObj)
				// // console.log(newList)
			}
		},
		props: ["col", 'test'],
		created(){
			// console.log(this.needCol)
			var self = this
			this.arr = this.newList
			this.newList = []
			this.arr.forEach(function(item){
				if(item.col === self.needCol){
					self.newList.push(item)
				}
			})
			// console.log(this.newList)
		},
		mounted() {
			
			// console.log(this.col)
			// console.log(this.$refs);
			// var boxObj = this.$refs.col;
			// console.log(boxObj)
			// boxObj.style.left = (this.needCol - 1) * 300 + "px";
			// console.log(this.needCol);
			// console.log(this.arrFromApp)
		},
		components: {
			message
		}
	};
</script>

<style scoped>
	.bigBox {
		display:flex;
		flex-direction: column;
		/* justify-content: center; */
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		width: 300px;
		/* height: 100px; */
		position: relative;
	}

	button {
		position: absolute;
		top: -20px
	}
</style>
