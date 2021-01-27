<template>
  <div id="app">
		<div id="nav">
			<router-link to="/index">index</router-link> | 
			<router-link to="/mobile2">mobile2</router-link>
		</div>
		<router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
  }
</style>
