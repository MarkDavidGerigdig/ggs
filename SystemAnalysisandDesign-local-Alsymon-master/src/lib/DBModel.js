const Sequelize = require("sequelize");
const sequelize = new Sequelize("db_crud", "root", "alsymon12", {
  host: "localhost",
  dialect: "mysql",
});
const Admin = require('../model/Admin')(sequelize);
const Crime = require('../model/Crime')(sequelize);

async function findAllCrimes(req, res) {
  try {
    const crimes = await Crime.findAll();
    res.json(crimes.map((crime) => crime.toJSON()));
  } catch (error) {
    console.error("Error fetching crimes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function findAllAdmin(req, res) {
  try {
    const admin = await Admin.findAll();
    res.json(admin.map((admin) => admin.toJSON()));
  } catch (error) {
    console.error("Error fetching crimes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

function addAdmin(req, res) {
  const body = req.body;
  const { username, password,position } = body;
  try {
    Admin.create({
      username: username,
      password: password,
      position: position,
    }).then((newAdmin) => {
      res.json({
        admin: newAdmin.toJSON(), 
      }
      )      
    });
  }  catch (error) {
    console.error(error); 
    res.json({
      error: "An error occurred while creating the admin user",
    });
  }
}
async function addCrime(req, res) {
  const body = req.body;
  const { crime, location, date, status, report, coordinates } = body;
  console.log('Received payload:', body);
  try {
    const newCrime = await Crime.create({
      crime: crime,
      location: location,
      date: date,
      status: status,
      report: report,
      coordinates: coordinates, // No need to parse here
    });

    res.json({
      Crime: newCrime.toJSON(),
    });
    
  } catch (error) {
    console.error('Error adding crime:', error);

    res.status(500).json({
      error: 'An error occurred while adding the crime.',
    });
  }
}

function loginAdmin(req, res) {
  const { username, password } = req.body;

  try {
    
    Admin.findOne({ where: { username: username } })
      .then((admin) => {

        if (!admin || admin.password !== password) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }

        
        res.json({ message: 'Login successful' });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

exports.addAdmin = addAdmin;
exports.loginAdmin = loginAdmin;
exports.addCrime = addCrime;
exports.findAllCrimes = findAllCrimes;
exports.findAllAdmin = findAllAdmin;
/* 
const User = require("../model/User")(sequelize);
const Post = require("../model/Post")(sequelize);
const Comment = require("../model/Comment")(sequelize);

function createUsers(req, res) {
  const body = req.body;
  const { username, email } = body;
  try {
    User.create({
      username: username,
      email: email,
    }).then((newUser) => {
      res.json({
        user: newUser.toJSON(),
      });
    });
  } catch (error) {
    res.json({
      message: "error",
    });
  }
}

async function findAll(res) {
  try {
    //    const limit = parseInt(req.query.limit) || 5; // Set the desired limit, default to 5 if not provided
    const users = await User.findAll({
      //  limit: limit,
    });
    res.json(users.map((user) => user.toJSON()));
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function findById(req, res) {
  console.log("ID:", req.body.id);
  const id = req.body.id;
  User.findByPk(id)
    .then((user) => {
      if (user) {
        res.json(user.toJSON());
      } else {
        res.status(500).json({
          error: "Not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
}

function updatedUser(req, res) {
  const body = req.body;
  const { id, username, email } = body;
  User.update(
    { username, email },
    {
      where: {
        userID: id,
      },
    }
  )
    .then(([rowsUpdated]) => {
      if (rowsUpdated > 0) {
        res.json({
          result: body,
        });
      } else {
        res.status(500).json({
          error: "Failed to update, user not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
}

//POST CRUD
function createPost(req, res) {
  const body = req.body;
  const { title, content, userID } = body;
  try {
    Post.create({
      title: title,
      content: content,
      userID: userID,
    }).then((user) => {
      res.json({
        user: user.toJSON(),
      });
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Failed to post the message!",
    });
  }
} 

exports.createUsers = createUsers;
exports.findAll = findAll;
exports.findById = findById;
exports.updatedUser = updatedUser;
exports.createPost = createPost;*/
