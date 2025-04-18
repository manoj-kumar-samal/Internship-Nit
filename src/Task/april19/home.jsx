import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:4050/employees")
      .then(response => {
        setEmployees(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-lg font-semibold text-gray-600 animate-pulse">Loading employees...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl w-full mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 flex flex-col flex-1">
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-blue-700">
            Employee Directory
          </h1>
          <Link to='/add-employee' className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            + Add Employee
          </Link>
        </div>
        <div className="overflow-x-auto flex-1 flex flex-col">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-100 text-blue-900 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Designation</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
          </table>
          <div className="flex-1 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <tbody className="bg-white">
                {employees.map((emp, index) => (
                  <tr
                    key={emp.id}
                    className={index % 2 === 0 ? "bg-gray-50 hover:bg-blue-50" : "hover:bg-blue-50"}
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">{emp.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{emp.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{emp.Designation}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <Link to={`edit-employee/${emp.id}`} className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600">
                          Edit
                        </Link>
                        <Link to={`delete-employee/${emp.id}`} className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
