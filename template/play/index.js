import { play } from 'vue-play';
import Counter from '../src/Component.vue';

play(Counter)
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
