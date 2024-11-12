const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        hooks: {
            beforeCreate: async(user) => {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    });

    //Metodo de instancia para verificar la contraseña
    User.prototype.validPassword = async function name(password) {
        return await bcrypt.compare(password, this.password);
    };

    return User; //Retorna el modelo definido

    
};