import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('component', {
    description: 'Generator for components',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter new component name',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: 'plop-templates/component.hbs',
        path: 'src/components/{{name}}/{{name}}.tsx',
      },
      {
        type: 'add',
        templateFile: 'plop-templates/styles.hbs',
        path: 'src/components/{{name}}/styles.ts',
      },
      {
        type: 'add',
        template: "export { default as {{name}} } from './{{name}}'\n",
        path: 'src/components/{{name}}/index.ts',
        separator: '',
      },
      {
        type: 'append',
        template: "export * from './{{name}}'\n",
        path: 'src/components/index.ts',
        separator: '',
      },
    ],
  })

  plop.setGenerator('screen', {
    description: 'Generator for screens',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter new screen name',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: 'plop-templates/screen.hbs',
        path: 'src/screens/{{name}}Screen/{{name}}Screen.tsx',
      },
      {
        type: 'add',
        templateFile: 'plop-templates/styles.hbs',
        path: 'src/screens/{{name}}Screen/styles.ts',
      },
      {
        type: 'add',
        template: "export { default as {{name}}Screen } from './{{name}}Screen'\n",
        path: 'src/screens/{{name}}Screen/index.ts',
        separator: '',
      },
      {
        type: 'append',
        template: "export * from './{{name}}Screen'\n",
        path: 'src/screens/index.ts',
        separator: '',
      },
    ],
  })
}
