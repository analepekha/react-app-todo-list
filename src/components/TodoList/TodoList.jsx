import { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  Button,
  TextField,
  Box,
} from "@mui/material";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export const TodoList = ({ todos, setTodos }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  const editTodo = (id, text) => {
    setEdit(id);
    setValue(text);
  };
  const deleteTodo = (id) => {
    setTodos((prevState) => {
      const newTodo = prevState.filter((item) => item.id !== id);
      return newTodo;
    });
    // let newTodo = [...items].filter(item => item.id !== id)
    // setTodo(newTodo)
  };

  const statusTodo = (id) => {
    setTodos((prevState) => {
      const newTodo = prevState.filter((item) => {
        if (item.id === id) {
          item.status = !item.status;
        }
        return item;
      });
      return newTodo;
    });
    // let newTodo = [...items].filter(item => {
    //     if (item.id === id) {
    //         item.status = !item.status;
    //     }
    //     return item;
    // })
    // setTodo(newTodo);
  };

  const handleEditChange = (e) => {
    setValue(e.target.value);
  };

  const saveTodo = (id) => {
    setTodos(() => {
      const newTodo = [...todos].map((item) => {
        if (item.id === id) {
          item.text = value;
        }
        return item;
      });
      return newTodo;
    });
    setEdit(null);
  };

  return (
    <div>
      <Typography component="p" sx={{ letterSpacing: "0.1rem" }}>
        Total Todos: {todos.length}
      </Typography>
      <List sx={{ maxWidth: "600px", p: "0", mt: "20px" }}>
        {todos.map(({ id, text, status }) => {
          return (
            <ListItem key={id} sx={{ p: 0, mb: "20px" }}>
              <LightbulbCircleIcon color="secondary" sx={{ mr: "10px" }} />
              {edit === id ? (
                <div>
                  <TextField
                    sx={{ width: "200px", mr: "10px" }}
                    color="secondary"
                    size="small"
                    type="text"
                    value={value}
                    onChange={handleEditChange}
                  />
                </div>
              ) : (
                <Typography
                  component="p"
                  sx={{ width: "200px", mr: "auto", letterSpacing: "0.1rem" }}
                >
                  {text}
                </Typography>
              )}

              {edit === id ? (
                <div>
                  <Button
                    sx={{ backgroundColor: "secondary.dark" }}
                    onClick={() => saveTodo(id)}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <Box component="div" sx={{ display: "flex" }}>
                  <Button sx={{ p: "0" }} onClick={() => statusTodo(id)}>
                    {!status ? (
                      <CheckBoxOutlineBlankIcon color="secondary" />
                    ) : (
                      <CheckBoxIcon color="secondary" />
                    )}
                  </Button>
                  <Button sx={{ p: "0" }} onClick={() => editTodo(id, text)}>
                    <EditIcon color="secondary" />
                  </Button>
                  <Button sx={{ p: "0" }} onClick={() => deleteTodo(id)}>
                    <DeleteSweepIcon color="secondary" />
                  </Button>
                </Box>
              )}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
