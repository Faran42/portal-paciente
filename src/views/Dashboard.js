import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Body
        title="Home"
        bodyContent={
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}

              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>150</h3>
                      <p>Pedidos realizados</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Mais informações{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>
                        53<sup style={{ fontSize: 20 }}>%</sup>
                      </h3>
                      <p>Desconto tarja amarela</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-percentage" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Mais informações{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>44%</h3>
                      <p>Desconto tarja vermelha</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-percentage" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Mais informações{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-secondary">
                    <div className="inner">
                      <h3>65%</h3>
                      <p>Desconto tarja preta</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-percentage" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Mais informações{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
              </div>
              <div className="row">
                <div className="col-lg-12 col-12 ">
                  <div className="">
                    <p className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn-lg btn-success"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <i class="fas fa-medkit" />
                        &nbsp; Cadastrar novo pedido
                      </button>
                    </p>
                    <div
                      className="collapse col-lg-6 col-12 offset-lg-3 "
                      id="collapseExample"
                    >
                      <div className="">
                        <div className="card card-body ">
                          {/* /.row */}
                          {/* form */}
                          <div className="card card-success">
                            <div className="card-header">
                              <h3 className="card-title">
                                Pedido de compra de medicamento
                              </h3>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                              <form>
                                <div className="row">
                                  <div className="col-sm-6">
                                    {/* text input */}
                                    <div className="form-group">
                                      <label>Endereço para entrega</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Alameda dos Anjos..."
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label>Nome do Médico</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hipócrates"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    {/* text input */}
                                    <div className="form-group">
                                      <label>Nome do Medicamento</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="HP Potion"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label>Quantidade</label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="42"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    {/* text input */}
                                    <div className="form-group">
                                      <label>Data da receita médica</label>
                                      <input
                                        type="date"
                                        className="form-control"
                                        placeholder="11/11/2011"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label>Telefone</label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="(99) 9 9999-9999"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleCheck1"
                                      >
                                        Medicamento genérico?
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <button
                                      type="submit"
                                      className="btn btn-success"
                                    >
                                      Fazer pedido
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            {/* /.card-body */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
        }
      />
      <SideNav />
    </div>
  );
};

export default Dashboard;
