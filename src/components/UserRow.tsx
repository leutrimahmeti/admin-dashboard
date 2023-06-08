import { AiFillDelete } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { UserRowProps } from "../Types/types";

const UserRow = ({
  user,
  handleToggleStatus,
  handleDeleteClick,
}: UserRowProps) => (
  <tr
    key={user.id}
    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-3 items-center cursor-pointer"
  >
    <td>
      <div className="flex items-center">
        <div className="bg-orange-100 p-3 rounded-lg">
          <BsPersonFill className="text-orange-800" />
        </div>
        <p className="pl-4">{user.name}</p>
      </div>
    </td>
    <td className="text-gray-600">
      <div
        className={`w-28 rounded-full mr-2 flex items-center justify-center ${
          user.status === "Activated" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <span className="text-white">{user.status}</span>
      </div>
    </td>
    <td className="flex items-center justify-end">
      <button
        className="p-2 w-24 bg-orange-500 rounded-xl text-white hover:bg-orange-400"
        onClick={() => handleToggleStatus(user.id)}
      >
        {user.status === "Deactivated" ? "Activate" : "Deactivate"}
      </button>
      <button
        className="text-black p-2 hover:text-orange-600"
        onClick={() => handleDeleteClick(user.id)}
      >
        <AiFillDelete className="w-8 h-8" />
      </button>
    </td>
  </tr>
);

export default UserRow;
