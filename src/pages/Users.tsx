import React, { useState } from "react";
import { usersMockData } from "../data/index";
import DeleteUserModal from "../components/DeleteUserModal";
import UserRow from "../components/UserRow";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SarchInput";

const Users: React.FC = () => {
  const [data, setData] = useState(usersMockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleDeleteClick = (id: number) => {
    const selectedUser = filteredData.find((user) => user.id === id);
    if (selectedUser) {
      setSelectedUserId(selectedUser.id);
      setShowModal(true);
    }
  };

  const handleConfirmDelete = () => {
    const updatedData = data.filter((user) => user.id !== selectedUserId);
    setData(updatedData);
    setFilteredData(updatedData);
    setShowModal(false);
  };

  const handleToggleStatus = (userId: number) => {
    const updatedUsers = filteredData.map((user) => {
      if (user.id === userId) {
        console.log(user.status);
        return {
          ...user,
          status: user.status === "Activated" ? "Deactivated" : "Activated",
        };
      }
      return user;
    });
    setData(updatedUsers);
    setFilteredData(updatedUsers);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = data.filter((user) => {
      return user.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    return currentData.map((user) => (
      <UserRow
        key={user.id}
        user={user}
        handleToggleStatus={handleToggleStatus}
        handleDeleteClick={handleDeleteClick}
      />
    ));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-bold">Users</div>
      <div className="w-full m-auto p-4 border rounded-2xl bg-white overflow-y-auto">
        <div className="flex items-center justify-end mb-4">
          <SearchInput value={searchQuery} onChange={handleSearchInputChange} />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="p-2 text-left grid grid-cols-3 items-center cursor-pointer">
                <th>Name</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <DeleteUserModal
        showModal={showModal}
        handleConfirmDelete={handleConfirmDelete}
        handleCancelDelete={() => setShowModal(false)}
      />
    </div>
  );
};

export default Users;
