import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import UserCardFull from "../components/UserCardFull";

interface SearchData {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

const Homepage = () => {
  const [searchData, setSearchData] = useState<SearchData[]>([]);
  const [userData, setUserData] = useState<SearchData>(searchData[0]);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  const getData = async (searchQuery: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000?term=${
          searchQuery && encodeURIComponent(searchQuery)
        }`
      );
      const data = await response.json();
      setSearchData(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchData([]);
    }
    setIsReady(true);
  };

  const handleSearch = async (searchQuery: string) => {
    await getData(searchQuery);
  };

  const handleShowUser = (userData: SearchData) => {
    setUserData(userData);
    setShowOverlay(true);
  };

  const handleShowOvelay = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    getData("");
  }, []);

  return (
    <>
      <div className="search">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="user-section">
        {isReady && (searchData.length === 0 ? (
          <h1 className="text" style={{ textAlign: "center", fontSize: 20 }}>
            No Results Found
          </h1>
        ) : (
          <div className="user-list">
            {searchData.map((userData, index) => (
              <UserCard
                key={index}
                userData={userData}
                onHandleShowUser={handleShowUser}
              />
            ))}
          </div>
        ))}
      </div>
      {showOverlay && (
        <UserCardFull userData={userData} handleShowOvelay={handleShowOvelay} />
      )}
    </>
  );
};

export default Homepage;
