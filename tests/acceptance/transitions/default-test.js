import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/default');

test('visiting /transitions/default', function(assert) {
  visit('/transitions/default');

  andThen(function() {
    assert.equal(currentURL(), '/transitions/default');
  });
});
