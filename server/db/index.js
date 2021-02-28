import mongoose from 'mongoose';
import { Promise as es6Promise } from 'es6-promise';

const mongoConnectionString='mongodb://localhost:27017/demo1'
const useMongoClient = true;
const useNewUrlParser=true;
mongoose.Promise = es6Promise;
mongoose.connect(mongoConnectionString,{useNewUrlParser:true},  (err) => {
	if (err) {
		console.log('mongo connection err', err);
	} else {
		console.log('database connected');
	}
});

export default mongoose;