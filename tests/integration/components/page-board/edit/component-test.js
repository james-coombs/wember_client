import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('boards-pages/edit', 'Integration | Component | page board/edit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{boards-pages/edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#boards-pages/edit}}
      template block text
    {{/boards-pages/edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
