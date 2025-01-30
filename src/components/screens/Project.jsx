import React, { useEffect, useState } from "react";
import { Card } from "../Card";

export default function Project() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let res = await fetch(
          "https://api.github.com/users/vishalpanchal1024/repos"
        );

        setData(await res.json());
        console.log(data);
      } catch (error) {
        console.log("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 ">
        {data.map((item, index) => (
          <Card
            title={item.name}
            description={item.description}
            status={item.visibility}
            github={item.html_url}
            live={item.homepage}
            lang={item.language}
          />
        ))}
      </div>
    </>
  );
}
