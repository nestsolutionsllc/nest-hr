import {NextPage } from "next";
import {
  Container,
  CssBaseline,
  Typography,
  Button,
  Avatar,
  Box,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormEvent, useCallback } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../providers";

const SigninPage: NextPage = () => {
  const { push } = useRouter();
  const {setUser} = useAuth()

  const submit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      setUser({email : 'aaaa'})
    },
    [push]
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography mb={2} component="h1" variant="h5">
          Нэвтрэх
        </Typography>
        <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
          {/* Fields */}

          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Нэвтрэх нэр"
            name="username"
            autoFocus
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Нууц үг"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          {/* Button */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 0 }}
          >
            Нэвтрэх
          </Button>

          {/* Forgot Password */}

          {/* <Box sx={{ textAlign: 'right' }}>
            <Link href="#" variant="body2">
              Мартчихсан уу :)
            </Link>
          </Box> */}
        </Box>
      </Box>
    </Container>
  );
};

export default SigninPage;
