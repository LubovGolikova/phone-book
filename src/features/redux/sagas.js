import { all, spawn } from 'redux-saga/effects';

import auth from '../auth/redux/saga';

function* sagas() {
    yield all([spawn(auth)]);
}

export default sagas;