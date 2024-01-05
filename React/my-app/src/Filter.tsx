import React, { useState } from 'react';

const Filter= () => {
  const [searchVal, setSearchVal] = useState<string>("");

  const technologyList: string[] = [
    "React", "Angular", "Vue", "Node.js",
    "Express", "Django", "Spring Boot", "Flutter",
    "Swift", "Java", "Python", "JavaScript",
    "HTML", "CSS", "MongoDB"
  ];

  const filteredTechnologies = technologyList.filter(item =>
    item.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <div className="search-container">
      Enter Technologie Name:
      <input
        type="text"onChange={(e) => setSearchVal(e.target.value)}  value={searchVal}  placeholder="Search technologies..."
      />
      <div>
        {filteredTechnologies.map((technology, index) => (
          <div key={index}>{technology}</div>
        ))}
      </div>
    </div>
  );
};
export default Filter;