import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('servers-pages/page', 'Integration | Component | page server/page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{servers-pages/page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#servers-pages/page}}
      template block text
    {{/servers-pages/page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
