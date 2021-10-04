import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Body from "../components/Body";
import SideNav from "../components/SideNav";

import api from "../config/api";

const ListaDePedidos = () => {
  const [apiResponse, setApiResponse] = useState([{}]);

  useEffect(() => {
    const googleId = sessionStorage.getItem("googleId");
    api.get(`requisicoes/${googleId}`).then((response) => {
      setApiResponse(response.data);
      console.log(response);
    });
  }, []);

  // const apiResponse = [
  //   {
  //     medicamento: "Dipirona",
  //     medico: "Dr. Genivaldo",
  //     quantidade: 5,
  //     create_date: "21-05-21",
  //   },
  //   {
  //     medicamento: "Aspirina",
  //     medico: "Dr. Laércio",
  //     quantidade: 2,
  //     create_date: "06-06-21",
  //   },
  //   {
  //     medicamento: "Paracetamol",
  //     medico: "Drª. Elisangela Nuñes",
  //     quantidade: 112,
  //     create_date: "01-01-21",
  //   },
  //   {
  //     medicamento: "Activia",
  //     medico: "Dr. Laravel",
  //     quantidade: 112,
  //     create_date: "01-01-21",
  //   },
  // ];

  return (
    <div>
      <Header />
      <Body
        title="Meus Pedidos"
        bodyContent={
          <div className="row">
            <div className="col-12">
              <div className="card">
                {/* /.card-header */}
                <div
                  className="card-body table-responsive p-0"
                  style={{ height: 350 }}
                >
                  <table className="table table-head-fixed table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Remédio</th>
                        <th>Médico</th>
                        <th>quantidade</th>
                        <th>Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      {apiResponse.map((item, index) => {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.medicamento}</td>
                            <td>{item.medico}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.create_date}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
        }
      />
      <SideNav />
    </div>
  );
};

export default ListaDePedidos;
