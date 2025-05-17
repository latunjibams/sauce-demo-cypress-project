// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       baseUrl: 'https://quickteller-merchant-ui.isw.la'
//     specPattern: 'cypress/e2e/**/*.spec.ts'
//     supportFile: 'cypress/support/e2e.ts' // implement node event listeners here
//     },
//   },
// });




// //  correct with undefined
// import { defineConfig } from 'cypress';
// import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
// // Fix the import statement
// const webpack = require('@cypress/webpack-preprocessor');

// async function setupNodeEvents(
//   on: Cypress.PluginEvents,
//   config: Cypress.PluginConfigOptions
// ): Promise<Cypress.PluginConfigOptions> {
//   // This is required for the preprocessor to be able to generate JSON reports after each run
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     'file:preprocessor',
//     webpack({
//       webpackOptions: {
//         resolve: {
//           extensions: ['.ts', '.js'],
//         },
//         module: {
//           rules: [
//             {
//               test: /\.ts$/,
//               exclude: [/node_modules/],
//               use: [
//                 {
//                   loader: 'ts-loader',
//                 },
//               ],
//             },
//             {
//               test: /\.feature$/,
//               use: [
//                 {
//                   loader: '@badeball/cypress-cucumber-preprocessor/webpack',
//                   options: config,
//                 },
//               ],
//             },
//           ],
//         },
//       },
//     })
//   );

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

// export default defineConfig({
//   e2e: {
//     baseUrl: 'https://quickteller-merchant-ui.k8.isw.la',
//     specPattern: 'cypress/e2e/**/*.feature',
//     supportFile: 'cypress/support/e2e.ts',
//     setupNodeEvents,
//   },
// });






 
import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents,
    env: {
      // 👇 Correct way to specify step definitions
      'cypress-cucumber-preprocessor': {
        stepDefinitions: ['cypress/support/step_definitions/**/*.ts'],
      },
    },
  },
});
