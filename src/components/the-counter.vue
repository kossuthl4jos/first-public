<template>
	<div class="section has-text-centered counter-grid-container">
		<div class="subtitle day-title-item"> Days </div>
		<div class="day-item">
			<IOdometer
				:value="numberOfDays + 1000"
				:theme="selectedTheme"
				class="iOdometer" />
		</div>
		<div class="subtitle hour-title-item"> Hours </div>
		<div class="hour-item">
			<IOdometer
				:value="numberOfHours + 100"
				:theme="selectedTheme"
				class="iOdometer" />
		</div>
	</div>
</template>

<script>
import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-train-station.css';
import 'odometer/themes/odometer-theme-car.css';

export default {
	name: 'TheCounter',
	components: {
		IOdometer
	},
	data() {
		return {
			selectedTheme: 'train-station'
		};
	},
	computed: {
		numberOfDays() {
			return this.$store.getters.numberOfDays;
		},
		numberOfHours() {
			return this.$store.getters.numberOfHours;
		}
	}
};
</script>

<style lang="scss">
	@media only screen and (max-width: 670px) {
		.odometer {
			font-size: 11.2vw;
		}
	}

	.iOdometer {
		margin: 0;
	}
	@media only screen and (max-width: 670px) {
		.odometer {
			font-size: 11.2vw;
		}
	}

	@media only screen and (min-width: 670px) {
		.odometer {
			font-size: 75px;
		}
	}

	.odometer .odometer-inside .odometer-digit:first-child {
		display: none;
	}
	.odometer .odometer-inside .odometer-formatting-mark {
		display: none;
	}

	.counter-grid-container {
		display: grid;
		justify-content: center;
		column-gap: 100px;
	}
	.day-title-item {
		grid-column: 1;
		grid-row: 1;
	}
	.hour-title-item {
		grid-column: 2;
		grid-row: 1;
	}
	.day-item {
		grid-column: 1;
		grid-row: 2;
	}
	.hour-item {
		grid-column: 2;
		grid-row: 2;
	}
</style>