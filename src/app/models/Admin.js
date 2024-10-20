import { DataTypes } from "sequelize";
import sequelize from "@/utils/sequelize";

const Admin = sequelize.define(
  "admins",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // this will automatically add createdAt and updatedAt fields
  }
);
export default Admin;
