import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  const wrapper = shallowMount(App)

  it('enterNum changes running total', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('four plus one is five', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('seven minus four is three', () => {
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})


