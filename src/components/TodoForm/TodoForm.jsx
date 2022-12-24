import { nanoid } from "nanoid";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export const TodoForm = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      props.onSubmit({
        id: nanoid(),
        text: value,
      });
      setValue("");
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          mb: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{ width: "800px", mr: 2 }}
          fullWidth
          label="Add task"
          variant="outlined"
          color="secondary"
          size="small"
          type="text"
          name="todo"
          onChange={handleChange}
          value={value}
        />
        <Button
          sx={{ width: 160, letterSpacing: "0.1rem" }}
          variant="contained"
          size="small"
          type="submit"
          onClick={handleSubmit}
        >
          Add task
        </Button>
      </Box>
    </div>
  );
};
