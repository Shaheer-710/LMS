import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', },
  { field: 'firstName', headerName: 'First name',  },
  { field: 'email', headerName: 'Email', },
];

export default function Table() {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data');
        setData(response.data)
        setRows(data); 
      } catch (err) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Paper sx={{ height: 400, }}>
      <DataGrid
        rows={rows} 
        columns={columns}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}