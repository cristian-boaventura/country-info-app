import app from './app';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
