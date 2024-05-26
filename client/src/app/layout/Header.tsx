import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";

const midLinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const rightLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const navStyles = {
  textDecoration: "none",
  "&:hover": {
    color: "secondary.main",
  },
};

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar
      position="static"
      sx={{ mb: 4, mt: 3 }}
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          {/* The SnackStore title */}
          <Typography
            color="textPrimary"
            variant="h6"
            component={NavLink}
            to="/"
            sx={navStyles}
          >
            SnackStore
          </Typography>

          {/* The dark mode switch */}
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        <Box>
          {/* The links in the middle */}
          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path}>
                <Typography color="textPrimary" variant="h6" sx={navStyles}>
                  {title}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box display="flex" alignItems="center">
          {/* The shopping cart icon */}
          <IconButton
            component={Link}
            to="/basket"
            size="large"
            edge="start"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={itemCount} color="secondary">
              <Typography color="textPrimary" variant="h5" sx={navStyles}>
                <FiShoppingCart />
              </Typography>
            </Badge>
          </IconButton>
          {user ? (
            <SignedInMenu />
          ) : (
            /* The links to the right */
            <List sx={{ display: "flex" }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem component={NavLink} to={path} key={path}>
                  <Typography color="textPrimary" variant="h6" sx={navStyles}>
                    {title}
                  </Typography>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
