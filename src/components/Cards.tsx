
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type DictionaryWords = {
  id: string,
  english: string,
  polish: string,
  spanish: string,
  italian: string,
  url: string,
};

type Props = {
  words: DictionaryWords[];
};


export default function FlashCard({ words }: Props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Just using the first word's image for example — you can adjust this as needed */}
      <CardMedia
        sx={{ height: 140 }}
        image={words[0]?.url || "/static/images/cards/contemplative-reptile.jpg"}
        title="drink image"
      />
      <CardContent>
        {words.map((word) => {
          return (
            <div key={word.id}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                English: {word.english}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Polish: {word.polish}
              </Typography>
              <CardMedia
                sx={{ height: 100, mt: 1 }}
                image={word.url}
                title={word.english}
              />
            </div>
          );
        })}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
