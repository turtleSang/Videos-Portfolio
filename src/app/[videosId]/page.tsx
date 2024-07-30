export default function Page({ params }: { params: { videosId: string } }) {
  return <h1>{params.videosId}</h1>;
}
