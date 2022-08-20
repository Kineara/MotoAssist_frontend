import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function TaskCard({ taskData }) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>{taskData.name}</Typography>
        <Typography><em>{taskData.description}</em></Typography>
        <Typography>{`Due by ${taskData.date_due}`}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Mark Completed</Button>
      </CardActions>
    </Card>
  );
}
