import { moduleFor, test } from 'ember-qunit';

moduleFor('route:dc/services', 'Unit | Route | dc/services', {
  // Specify the other units that are required for this test.
  needs: ['service:services'],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
