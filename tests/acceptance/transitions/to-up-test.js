import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/to up');

test('visiting /transitions/to-up', function(assert) {
  visit('/');

  andThen(function() {
    visit('/to-up');

    andThen(function() {
      assert.equal(currentURL(), '/to-up');
    });
  });
});
