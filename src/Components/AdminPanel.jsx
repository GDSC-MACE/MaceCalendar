import axios from "axios";
import { useState, useEffect } from "react";
export default function AdminPanel() {
  // Fetch all events
  const [allevents, setAllevents] = useState([]);
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://13.233.74.175/post/allposts`);
      console.log("all events", response.data);
      setAllevents(response.data);
      console.log(allevents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchUsers();
  }, []);

  // fetch all users - not set up yet in backend server
  const [allusers, setAllusers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://13.233.74.175/user/users", {
        withCredentials: true,
      });
      console.log(response.data);
      setAllusers(response.data);
      console.log(allusers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return <div>AdminPanel</div>;
}
