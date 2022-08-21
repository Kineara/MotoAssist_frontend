import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function TaskCard({ taskData, taskCompletedClickHandler, taskDeleteClickHandler }) {

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>{taskData.name}</Typography>
        <Typography><em>{taskData.description}</em></Typography>
        <Typography>{`Due by ${taskData.date_due}`}</Typography>
        <Typography>{taskData.completed ? "Finished!" : "Not yet done"}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={() => taskCompletedClickHandler(taskData)}>Mark Completed</Button>
        <Button size="small" variant="outlined" onClick={() => taskDeleteClickHandler(taskData)}>Delete</Button>
      </CardActions>
    </Card>
  );
}
