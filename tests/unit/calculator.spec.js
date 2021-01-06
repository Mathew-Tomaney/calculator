import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  const wrapper = shallowMount(App)

  it('enterNum changes running total', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9);
  });

  it('four plus one is five', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5);
  });

  it('seven minus four is three', () => {
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3);
  });
  
  it('three multiplied by five is fifteen', () => {
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15);
  });
  
  it('twenty-one divided by seven is three', () => {
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3);
  });
  
  it('can concatenate multiple number button clicks', () => {
    wrapper.vm.numberClick('7');
    wrapper.vm.numberClick('2');
    wrapper.vm.numberClick('1');
    expect(wrapper.vm.runningTotal).to.equal(721);
  });

  it('can chain multiple operations', () => {
    wrapper.vm.runningTotal = 0
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('1');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(12);
  });

  it('can clear running total without affecting calculation', () => {
    wrapper.vm.runningTotal = 20
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('4');
    wrapper.vm.numberClick('0');
    wrapper.vm.clearClick();
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(23);
  });
});


