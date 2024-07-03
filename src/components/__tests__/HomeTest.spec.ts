import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import HomeTest from '../HomeTest.vue';

describe('HomeTest', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeTest, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
