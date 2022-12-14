import './bootstrap';
window.Form = Form;

import Form from './form';
import { createApp } from 'vue/dist/vue.esm-bundler';

import GrindSizeComponent from './components/GrindSizeComponent.vue';
import GrinderDetailsComponent from './components/GrinderDetailsComponent.vue';
import ProducerDetailsComponent from './components/ProducerDetailsComponent.vue';
import GrinderReportFormComponent from './components/GrinderReportFormComponent.vue';
import GrinderReportDetailsComponent from './components/GrinderReportDetailsComponent.vue';
import NewGrinderFormComponent from './components/NewGrinderFormComponent.vue';
import GrinderEditFormComponent from './components/GrinderEditFormComponent.vue';
import GrindersDataTableComponent from './components/GrindersDataTableComponent.vue';
import ProducersDataTableComponent from './components/ProducersDataTableComponent.vue';
import GrinderReportsDataTableComponent from './components/GrinderReportsDataTableComponent.vue';

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp({});

app.component('grind-size-component', GrindSizeComponent);
app.component('grinder-details-component', GrinderDetailsComponent);
app.component('producer-details-component', ProducerDetailsComponent);
app.component('grinder-report-details-component', GrinderReportDetailsComponent);
app.component('grinder-report-form-component', GrinderReportFormComponent);
app.component('new-grinder-form-component', NewGrinderFormComponent);
app.component('grinder-edit-form-component', GrinderEditFormComponent);
app.component('grinders-data-table-component', GrindersDataTableComponent);
app.component('producers-data-table-component', ProducersDataTableComponent);
app.component('grinder-reports-data-table-component', GrinderReportsDataTableComponent);

app.use(vuetify).mount("#app");
