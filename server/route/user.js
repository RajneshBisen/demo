import UserControllers from '../controller/userController';

const prefix = '/api/user/';

export default (app) => {
	app.post(`${prefix}register`, UserControllers.register);
	app.post(`${prefix}login`, UserControllers.login);
};