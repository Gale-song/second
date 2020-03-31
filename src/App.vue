<template>
	<div id="app">
		<button @click='addCol'>添加列</button>
		<div class="container">
			<big-box v-for="item in bigBoxObj.cols" :col='item.col' :key='item.id' :test='arr' ref='colObj'>
				<!-- <message :test='rows' v-for="item in rows" :row='item.row' :key="item.row"></message> -->
			</big-box>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import bigBox from "./components/bigBox.vue";
	// import message from "./components/message.vue";

	export default {
		name: "App",
		data() {
			return {
				colNum: 0,
				bigBoxObj: {
					cols: []
				},

				arr: []


			};
		},
		components: {
			// message,
			bigBox
		},
		watch: {
			arr: function(val, oldVal) {
				if(val !== oldVal){
					console.log(this.arr)
					var index = this.arr.length - 1
					this.colNum = this.arr[index].col
					// console.log(this.colNum)
					var numCount = 1
					this.bigBoxObj.cols = []
					var self = this
					// console.log(this.bigBoxObj)
					this.arr.forEach(function(item) {
						if (item.col === numCount) {
							// console.log(item)
							var colObj = {
								col: numCount
							}
							numCount++
							// console.log(numCount)
							self.bigBoxObj.cols.push(colObj)
						}
					})
				}
			}
		},
		created() {
			console.log(this.arr)
			var self = this
			axios.get('./test.json').then(function(result) {
				
				self.arr = []
				// console.log(result.data)
				result.data.arr.forEach(function(item) {
					self.arr.push(item)
					// console.log(item)
					// self.$set(self.arr,index,item)
					// console.log(self.arr)
				})
			}).catch(function(error) {
				console.log(error)
			})
		


			console.log(this.arr)
			// console.log(this.colNum)
		},
		// 如果需要在好到Vue实例对象的$refs对象属性，需要在挂载完成之后获取
		mounted() {
			// this.flag = !this.flag
			// console.log(123)
			var index = this.arr.length - 1
			this.colNum = this.arr[index].col
			var numCount = 1
			this.bigBoxObj.cols = []
			var self = this
			// console.log(this.bigBoxObj)
			this.arr.forEach(function(item) {
				if (item.col === numCount) {
					// console.log(item)
					var colObj = {
						col: numCount
					}
					numCount++
					self.bigBoxObj.cols.push(colObj)
				}
			})
			// console.log(this.$refs.two);
			// this.$refs.two.arr.col = 2;
			// console.log(this.$refs.two.arr.col);
			// this.needHeight = document.querySelectorAll(".container")[0].offsetHeight;
			// console.log(this.needHeight);

		},
		updated(){
			// console.log(this.arr)
			// var index = this.arr.length - 1
			// this.colNum = this.arr[index].col
			// var numCount = 1
			// var self = this
			// // console.log(this.bigBoxObj)
			// this.arr.forEach(function(item) {
			// 	if (item.col === numCount) {
			// 		// console.log(item)
			// 		var colObj = {
			// 			col: numCount
			// 		}
			// 		numCount++
			// 		self.bigBoxObj.cols.push(colObj)
			// 	}
			// })
		},
		methods: {
			addCol() {
				// console.log(this.colNum)
				this.colNum++
				var colObj = {
					col: this.colNum
				}
				var arrObj = {
					"col": this.colNum,
					"row": 1,
					"keyword": "",
					"msg": {
						"title": "",
						"content": ""
					}
				}
				this.bigBoxObj.cols.push(colObj)
				this.arr.push(arrObj)
				// this.$refs.colObj.$refs.msg.addRow()
			}

		},
		computed: {
			ud() {
				return this
			}
		}
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	#app {
		width: 3000px;
		height: 5000px;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		/* margin-top: 60px; */
	}

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		/* flex-direction: column; */
		/* justify-content: center; /* 水平居中 */
		/* align-items: center; */
		/* 垂直居中 */
	}
</style>
