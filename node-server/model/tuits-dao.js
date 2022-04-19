import tuitsModel from './tuits-model.js';
const findAllTuitsDao = () => tuitsModel.find();
const createTuitDao = (tuit) => tuitsModel.create(tuit);
const deleteTuitDao = (tid) => tuitsModel.deleteOne({_id: tid});
const updateTuitDao = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

export default {findAllTuitsDao, createTuitDao, deleteTuitDao, updateTuitDao};