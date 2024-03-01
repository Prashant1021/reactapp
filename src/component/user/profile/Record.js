import { Table } from "antd";
import Card from "antd/es/card/Card";
import React from "react";

const Record = () => {
  const [tableParams, setTableParams] = React.useState({
    current: 1,
    pageSize: 5,
    total: 150,
  });

  const handlePaginationChange = (paginationData) => {
    setTableParams({
      current: paginationData?.current,
      pageSize: paginationData?.pageSize,
      total: paginationData?.total,
    });
  };

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "34",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "44",
      name: "Eden",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "55",
      name: "Lampard",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "68",
      name: "Drogba",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "79",
      name: "Antonio",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "85",
      name: "jems",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "SN",
      // dataIndex:'key',
      render: (text, record, index) => {
        return (
          <div>
            {(tableParams?.current - 1) * tableParams?.pageSize + (index + 1)}
          </div>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
        key: "4",
        name: "Eden Hazard",
        age: 32,
        address: "belgium",
        tags: ["cool", "footballer"],
      },
      {
        key: "5",
        name: "Lampard",
        age: 32,
        address: "England",
        tags: ["cool", "Manager"],
      },
      {
        key: "6",
        name: "Conte",
        age: 32,
        address: "germany",
        tags: ["cool", "manager"],
      },
  ];
  return (
    <div>
        <Card className="m-16 bg-slate-400 text-center">
        <Table 
        dataSource={dataSource}
        rowKey={"key"}
        columns={columns}
        pagination={{
          current: tableParams.current,
          pageSize: tableParams.pageSize,
          total: tableParams.total,
          showQuickJumper: true,
          showLessItems: true,
        }}
        onChange={handlePaginationChange}
      />
        </Card>
    
  
    </div>
  );
};

export default Record;