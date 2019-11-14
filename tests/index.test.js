const assert = require('assert');
const tdp = require('../index.js');

describe('Template directory projector library', () => {
    it('should initialize lazy', () => {
        assert.ok(tdp.lazy('./tests/templates', '{{plan}}'), 'Hello world from template directory projector!');
    });
});
