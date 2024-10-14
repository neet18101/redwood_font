import { DataTypes } from "sequelize";
import sequelize from "../../utils/sequelize";
const MenuItem = sequelize.define(
  "menu_items",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "menu_items",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
MenuItem.hasMany(MenuItem, { foreignKey: 'parent_id', as: 'subMenu' });
MenuItem.belongsTo(MenuItem, { foreignKey: 'parent_id', as: 'parentMenu' });

export default MenuItem;
