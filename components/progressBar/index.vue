<template>
	<div>
		 <ul>
		 	<li :class="n <= getCurrentState().currentStep+1? 'active' : ''" v-for="n in getCurrentState().totalSteps" :key="n">
				 <button type="button">{{n}}</button>
			 </li>
    	</ul>
	</div>
</template>
<script src="./component.js"></script>
<style lang="scss" scoped >
	@import "./style.scss";
</style>