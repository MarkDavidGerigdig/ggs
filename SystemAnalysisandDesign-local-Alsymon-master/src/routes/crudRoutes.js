const DBModel = require("../lib/DBModel");


function loginAdmin(req, res) {
  DBModel.loginAdmin(req, res);
}

function addAdmin(req, res) {
  DBModel.addAdmin(req, res);
}

function addCrime(req, res) {
  DBModel.addCrime(req, res);
}

function findAllCrimes(req, res){
  DBModel.findAllCrimes(req, res);
}
function findAllAdmin(req, res){
  DBModel.findAllAdmin(req, res);
}


exports.loginAdmin = loginAdmin;
exports.addAdmin = addAdmin;
exports.addCrime = addCrime;
exports.findAllCrimes = findAllCrimes;
exports.findAllAdmin = findAllAdmin;
/*
function createUser(req, res) {
  DBModel.createUsers(req, res);
}

function findAllUsers(req, res) {
  DBModel.findAll(res);
}

function findUserID(req, res) {
  DBModel.findById(req, res);
}

function updateUser(req, res) {
  DBModel.updatedUser(req, res);
}

function addPost(req, res) {
  DBModel.createPost(req, res);
}



exports.createUser = createUser;
exports.findAllUsers = findAllUsers;
exports.findUserID = findUserID;
exports.updateUser = updateUser;
exports.addPost = addPost; */