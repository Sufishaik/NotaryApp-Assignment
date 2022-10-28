import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Style.css"
function Example() {
  const [data, setdata] = useState([]);
  const handlethis = async () => {
    const response = await axios.post("http://demo2211087.mockable.io/mock");
    console.log(response.data);
    setdata(response.data.companies);
  };

  useEffect(() => {
    handlethis();
  }, []);
  return (
    <>
    <div className="main-div">

      {data.map((item, i) => {
          return (
              <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.status}</td>
                </tr>
              </tbody>
            </table>
          </>
        );
    })}
    </div>
    </>
  );
}

export default Example;
