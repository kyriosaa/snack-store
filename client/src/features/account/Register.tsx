import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { MdOutlineCreate } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Alert, AlertTitle, LoadingButton } from "@mui/lab";
import agent from "../../app/api/agent";
import { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

export default function Register() {
  const [validationErrors, setValidationErrors] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <MdOutlineCreate />
        </Avatar>
        <Box>
          <Typography>
            <h1>Register</h1>
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit((data) =>
            agent.Account.register(data).catch((error) =>
              setValidationErrors(error)
            )
          )}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors?.username?.message as string}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors?.email?.message as string}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors?.password?.message as string}
          />
          {validationErrors.length > 0 && (
            <Alert severity="error">
              <AlertTitle>Validation Errors</AlertTitle>
              <List>
                {validationErrors.map((error) => (
                  <ListItem key={error}>
                    <ListItemText>{error}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Alert>
          )}
          <LoadingButton
            loading={isSubmitting}
            disabled={!isValid}
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </LoadingButton>
          <Grid container>
            <Grid item>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Typography color="text.secondary">
                  {"Already have an account? Login"}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
