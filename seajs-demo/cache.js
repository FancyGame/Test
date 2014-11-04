define(function(require, exports) {
	
	var idSeed = 0,
		cache = {},
		id = '_ guid _';

	// @private
	function guid(el) {
		return el[id] || (el[id] = ++idSeed);
	}

	exports.set = function(el, key, val) {
		if (!el) {
			throw new Error('setting failed, invalid element');
		}

		var id = guid(el),
			c = cache[id] || (cache[id] = {});
		if (key) c[key] = val;

		return c;
	};

	exports.get = function(el, key, create) {
		if (!el) {
			throw new Error('getting failed, invalid element');
		}

		var id = guid(el),
			elCache = cache[id] || (create && (cache[id] = {}));

		if (!elCache) return null;

		return key !== undefined ? elCache[key] || null : elCache;
	};

	exports.has = function(el, key) {
		return this.get(el, key) !== null;
	};

	exports.remove = function(el, key) {
		var id = typeof el === 'object' ? guid(el) : el,
			elCache = cache[id];

		if (!elCache) return false;

		if (key !== undefined) {
			delete elCache[key];
		} else {
			delete cache[id];
		}

		return true;
	};

});