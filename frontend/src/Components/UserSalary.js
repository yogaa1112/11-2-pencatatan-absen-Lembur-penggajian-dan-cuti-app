import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';

const UserSalary = () => {
  const salaryData = [
    { no: 1, name: 'M Ichsan Dedi', position: 'Karyawan', period: 'Mei 2024', date: '2023-01-01',rek: '33112345678', amount: '5,000,000', note: 'Monthly Salary' },
    { no: 2, name: 'M Ichsan Dedi', position: 'Karyawan', period: 'Juni 2024', date: '2023-01-03',rek: '33112345678', amount: '5,000,000', note: 'Monthly Salary' },
    { no: 3, name: 'M Ichsan Dedi', position: 'Karyawan', period: 'Juli 2024', date: '2023-01-01',rek: '33112345678', amount: '5,000,000', note: 'Monthly Salary' },
    
    // Tambahkan data lebih banyak sesuai kebutuhan
  ];

  return (
    <div className='main-content'>
    <Container> 
      <Row className="my-4">
        <Col>
          <h2>Riwayat Gaji</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Periode</th>
                <th>Tanggal</th>
                <th>No Rekening</th>
                <th>Jumlah</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {salaryData.map((record) => (
                <tr key={record.no}>
                  <td>{record.no}</td>
                  <td>{record.name}</td>
                  <td>{record.position}</td>
                  <td>{record.period}</td>
                  <td>{record.date}</td>
                  <td>{record.rek}</td>
                  <td>{record.amount}</td>
                  <td>{record.note}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default UserSalary;
