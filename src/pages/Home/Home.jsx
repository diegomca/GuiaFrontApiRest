import React from "react";
import PageContainer from "../../components/container/PageContainer";
import { Box, Button, Typography } from "@mui/material";
import ListarTareas from "./components/ListarTareas";
import image1 from "../../assets/image/image1.png";

function Home() {
  return (
    <PageContainer title="Pagina inicio" description="aaaaaaaaaaaaaaaaa">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          ":before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "600px",
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          },
        }}
        minHeight={600}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent={"center"}
          alignItems="center"
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              textShadow: "2px 2px 4px #000000",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              zIndex: 1,
            }}
          >
            Gestiona tus tareas
          </Typography>
        </Box>
      </Box>
      <Box
        padding={10}
        display="flex"
        flexDirection="column"
        gap={5}
        alignItems="start"
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Mis tareas
        </Typography>
        <ListarTareas />
      </Box>
    </PageContainer>
  );
}

export default Home;
