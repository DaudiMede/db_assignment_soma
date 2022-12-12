import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


interface tableProps {
    rows: any[],
    columns: GridColDef[],
    pageSize: number,
    rowsPerPageOptions: number,
}

const CustomTable = (tableProps: tableProps) => {
  return (
    <Box sx={{ height: 680, width: '100%', px:1 }}>
      <DataGrid
        rows={tableProps.rows}
        columns={tableProps.columns}
        pageSize={tableProps.pageSize}
        rowsPerPageOptions={[tableProps.rowsPerPageOptions]}
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ px:3, borderTopColor:'primary.light' }}
      />
    </Box>
  );
}

export default CustomTable;
