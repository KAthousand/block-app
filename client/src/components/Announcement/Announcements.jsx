import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
// import "./Announcements.css";

import Announcement from "../../components/Announcement/Announcement";
import { getAnnouncements } from "../../services/announcements";

const Announcements = () => {
  const [setAnnouncements, setAllAnnouncements] = useState([]);
  // const [queriedPosts, setQueriedPosts] = useState([]);
 

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const announcements = await getAnnouncements();
      setAllAnnouncements(announcements);
      // setQueriedAnnouncements(announcements);
    };
    fetchAnnouncements();
  }, []);



  // const handleSearch = (event) => {
  //   const newQueriedPosts = allPosts.filter((post) =>
  //     post.title.toLowerCase().includes(event.target.value.toLowerCase())
  //   );
  //   setQueriedPosts(newQueriedPosts);
  // };

  // const handleSubmit = (event) => event.preventDefault();

  const announcementsJSX = setAnnouncements.map((announcement, index) => (
    <Announcement
      _id={announcement._id}
      imgURL={announcement.imgURL}
      category={announcement.category}
      title={announcement.title}
      content={announcement.content}
      key={index}
    />
  ));

  return (
    <div>
      <h2>Announcements</h2>
      <button>
        <Link className="create-link" to={`/announcements/create`}>
        Make an announcement
        </Link>
      </button>
      <div className="announcements">{announcementsJSX}</div>
    </div>
    
  )
  
        {/* <Search onSubmit={handleSubmit} onChange={handleSearch} /> */}
    
};

export default Announcements;