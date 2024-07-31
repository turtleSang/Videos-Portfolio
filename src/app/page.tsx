import ListItem from "@/layout/list-items";
import Image from "next/image";
import { listItem } from "@/helper/constance";

export default function Home() {
  return <ListItem listItem={listItem} />;
}
