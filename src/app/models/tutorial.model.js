module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    decription: {
      type: Sequelize.STRING,
    },
    province: {
      type: Sequelize.STRING,
    },
  });

  return Tutorial;
};
