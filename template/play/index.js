import { play } from 'vue-play';
import Component from '../src/Component.vue';

play(Component)
  .add('Normal', {
	template: `
      <{{ name }} :value="count" @increment="count += 1" @decrement="count -= 1"></{{ name }}>
    `,
	data() {
		return {
			count: 0,
		};
	},
});
