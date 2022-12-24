import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme/Theme";
import { Header } from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoFilter } from "./components/TodoFilter/TodoFilter";

function App() {
  const [todos, setTodos] = useState(() => {
    const value = JSON.parse(localStorage.getItem("todos"));
    return value ?? [];
  });
  console.log(todos);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const handleFilterChange = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getFilteredTodos = () => {
    if (!filter) {
      return todos;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredTodos = todos.filter(({ text }) => {
      const normalizedTodo = text.toLocaleLowerCase();
      const result = normalizedTodo.includes(normalizedFilter);
      return result;
    });
    return filteredTodos;
  };

  const filteredTodos = getFilteredTodos();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="sm" sx={{ pt: "30px", pb: "30px" }}>
        <TodoForm todos={todos} setTodos={setTodos} onSubmit={addTodo} />
        <Typography
          component="p"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.2rem",
          }}
        >
          Tasks
        </Typography>
        {todos.length > 0 && (
          <TodoFilter value={filter} handleFilterChange={handleFilterChange} />
        )}
        {todos.length === 0 ? (
          <Typography
            component="p"
            variant="h6"
            sx={{ mt: "20px", textAlign: "center", letterSpacing: "0.2rem" }}
          >
            Todo list is empty...
          </Typography>
        ) : (
          <TodoList todos={filteredTodos} setTodos={setTodos} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
