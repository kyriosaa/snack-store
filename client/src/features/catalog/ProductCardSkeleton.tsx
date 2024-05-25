import {
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
} from "@mui/material";

export default function ProductCardSkeleton() {
  return (
    <Grid item xs>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            variant="rounded"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
      />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rounded" />
      <CardContent>
        <>
          <Skeleton animation="wave" height={15} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={13} width="80%" />
        </>
      </CardContent>
      <CardActions>
        <>
          <Skeleton animation="wave" height={10} width="50%" />
          <Skeleton animation="wave" height={10} width="50%" />
        </>
      </CardActions>
    </Grid>
  );
}
