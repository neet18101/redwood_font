import { DataTypes } from "sequelize";
import sequelize from "../../utils/sequelize"; 
import MenuItem from "./MenuItem";
const MenuContent = sequelize.define("MenuContent", {
  menu_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sub_menu_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
   
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false

  },
  service_wallpaper: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  service_slider: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
}, {
  tableName: 'menu_content',
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: 'updated_at', 
});


MenuContent.belongsTo(MenuItem, { foreignKey: 'menu_id', as: 'menu' });

export default MenuContent;
