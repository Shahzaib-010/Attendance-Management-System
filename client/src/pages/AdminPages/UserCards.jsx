import React from 'react'
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from 'features/employees/employeesSlice';
import UserCard from 'components/UI/UserCard';


function UserCards() {


  const dispatch = useDispatch();
  const { list: employees, loading, error } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
   <section className="p-8 bg-black">
      <h2 className="text-[3vw] text-white font-wix2 mb-6">Our Team</h2>
      
      {/* The Grid Container */}
      <div className="flex flex-wrap gap-6">
        {employees.map((person) => (
          <UserCard key={person._id || person.id} employee={person} />
        ))}
      </div>
    </section>
  )
}

export default UserCards