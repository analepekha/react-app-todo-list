import { TextField, Box} from "@mui/material";

export const TodoFilter = ({value, handleFilterChange}) => {
    
    return (
        <Box component="div" sx={{display: 'flex', flexDirection: 'column',
            alignItems: 'center', mb:'30px',  mt:'20px'}}>
        <TextField
            sx={{width:'400px'}}
            label="Filter tasks"
            variant="outlined"
            color="secondary"
            size="small"
            type="text"
            name="filter"
            value={value}
            onChange={handleFilterChange}
            />
        </Box>
    )
}