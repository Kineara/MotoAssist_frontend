import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({vehicleData}) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <em>{vehicleData.nickname}</em>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`${vehicleData.year} ${vehicleData.make} ${vehicleData.model}`}
        </Typography>
        <Typography variant="body2">
          {`${vehicleData.vehicle_type}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Garage</Button>
      </CardActions>
    </Card>
  );
}