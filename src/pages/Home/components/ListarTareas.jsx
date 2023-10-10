import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import imageDefault from "../../../assets/image/defaultList.png";
import { actualizarTareaEstado } from "../database/dbTareas";

function ListarTareas() {
  const [listadoTareas, setListadoSuperHeroes] = useState([]);
  const [banderaCarga, setBanderaCarga] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:4000/tareas/get/");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const dataIn = await response.json();
        setListadoSuperHeroes(dataIn.data);
        console.log(dataIn.data);
        setBanderaCarga(false);
      } catch (error) {
        console.error("There was an error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {banderaCarga ? (
        <p>Cargando...</p>
      ) : (
        <Box display="flex" flexDirection="column" gap={2} width="100%">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: 250,
                  flexGrow: 1,
                  gap: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Typography variant="h5" component="h2">
                    {listadoTareas.length}
                  </Typography>
                  <Typography variant="body2">Tareas registradas</Typography>
                </Box>
                <Button variant="contained">Agregar tarea</Button>
              </Paper>
            </Grid>
            {listadoTareas.map((tareas) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="imagen default"
                      height="180"
                      image={imageDefault}
                    />
                    <CardContent>
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          {tareas.titulo}
                        </Typography>
                        <Chip label={tareas.estado} />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {tareas.descripcion}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => {
                          actualizarTareaEstado(tareas.id, (data) => {
                            console.log(data);
                          });
                        }}
                      >
                        Actualizar
                      </Button>
                      <Button size="small">Borrar</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default ListarTareas;
