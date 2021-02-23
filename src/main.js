/**
 * NOTE - This file only exists for development purpose.
 * It will help me to run and test the form
 */


import Vue from 'vue'
import App from './App.vue'
import {VueFormBuilderPlugin} from "@/index";

Vue.config.productionTip = false

Vue.use(VueFormBuilderPlugin, {
  controls: {
    'switch': {
      name: "Switch Field",
      description: "Single Switch",

      /**
       * Control View Mapping
       */
      fieldComponent: require('@/views/custom-control/switch/SwitchControl.vue'),

      /**
       * Control Configuration View Mapping
       */
      configComponent: require('@/views/custom-control/switch/SwitchConfigView.vue'),

      /**
       * Control-Data Extend
       * Your specific data for your custom control
       */
      configData: {
        isChecked: false,
        switchColor: "#64bd63"
      },

      /**
       * Default data of the Switch in Renderer
       * @returns {boolean}
       */
      rendererDefaultData() {
        return false
      },
    },
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
