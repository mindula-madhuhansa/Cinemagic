import { getNowPlayingMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

type Props = {
  id?: string;
  keyword?: string;
};

async function CarouselBannerWrapper({ id, keyword }: Props) {
  const movies = await getNowPlayingMovies();

  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;
