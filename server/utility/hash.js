const bcrypt = require('bcryptjs');
const SALT_ROUND = 10;
export default {

    	/**
	 * generate hash
	 */
	hashPassword: password => new Promise((resolve, reject) => {
		bcrypt.hash(password, 10, (err, hash) => {
			if (err) return reject(err);
			return resolve(hash);
		});
	}),
	/**
	 * compare hash with text
	 */
	comparePassword: (password, hash) => new Promise((resolve, reject) => {
		bcrypt.compare(password, hash, (err, compare) => {
			if (err) return reject(err);
			return resolve(compare);
		});
	})
};