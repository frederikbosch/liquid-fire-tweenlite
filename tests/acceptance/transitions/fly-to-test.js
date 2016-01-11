import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/fly to');

test('visiting /transitions/fly-to', function(assert) {
  visit('/transitions/fly-to');

  andThen(function() {
    assert.equal(currentURL(), '/transitions/fly-to');
  });
});
