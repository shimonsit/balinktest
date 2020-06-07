<template>
	<div>
		<section class="wrap-form-section">
			<progressBar :stepData="stepData" />
			<form>
				<div  v-for="(el,idx) in stepData[getCurrentState().currentStep].form" :key="idx">
					<div class="wrp-input">
						<label :class="el.type=='checkbox' ? 'checkbox' : ''" :for="el.name">{{el.label}}
							<input :id="el.name" v-if="el.tag == 'input'"  :class="el.inputErr.length > 0? 'input-err' : '' " :type="el.type"  v-model="el.value" :placeholder="el.placeholder">	
						</label>
						<div v-if="el.tag == 'select'">
							<div v-if='showMenu'>
								<select v-model="el.value">
									<option value="0">Select option</option>
									<option  v-for="(item,indx) in getCurrentState().countries" :key="indx" :value="item">{{item}}</option>
								</select>
							</div>
						</div>
						<div class="validation-error" v-if="el.inputErr.length > 0">
							<div  v-for="(inputError,inputErrorIdx) in el.inputErr" :key="inputErrorIdx">
								{{inputError}}
							</div>
						</div>
					</div>		
				</div>
			
				<button v-if="getCurrentState().currentStep != 0" class="btn" @click="prevStep()" type="button">Prev</button>
				<button v-if="getCurrentState().currentStep == getCurrentState().totalSteps -1" class="btn" v-bind:class="{ center: !prevStep }" @click="onSubmit()" type="button">Submit</button>

				<button v-if="getCurrentState().currentStep < getCurrentState().totalSteps -1" class="btn" v-bind:class="{ center: !prevStep }" @click="nextStep()" type="button">Next</button>
			</form>
		</section>
		<transition name="modal">
			<lightbox :TextHeader="TextHeader" :TextBody="TextBody" v-if="showModal" @close="showModal = false"></lightbox>
		</transition>
		<p>2020© Réalisé par Shimon Sitbon</p>
	</div>
  
</template>
<script src="./component.js"></script>
<style lang="scss">
	@import "./style.scss";
</style>
