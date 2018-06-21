import { shallowMount } from '@vue/test-utils';
import Paragraph from '@/components/atoms/Paragraph/index.vue';

describe('Paragraph', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Paragraph, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
