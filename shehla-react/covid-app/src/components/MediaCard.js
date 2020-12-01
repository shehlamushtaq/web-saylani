import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,

  },
});

export default function MediaCard({text, value, color}) {
  const classes = useStyles();

  return (
    <Card className="Mycard" style={{backgroundColor:color}}>
      <CardActionArea>
            <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {value}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
    
      </CardActions>
    </Card>
  );
}