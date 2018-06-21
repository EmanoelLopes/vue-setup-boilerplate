import { shallowMount } from '@vue/test-utils';
import About from '@/pages/About.vue';

describe('About.vue', () => {
  it('It should render a title called "This is an about page"', () => {
    const wrapper = shallowMount(About);
    const expected = 'This is an about page';
    expect(wrapper.find('.about h1').text()).toEqual(expected);
  });
});
