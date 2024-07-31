"use client";
import { listItem, TypeContent } from "@/helper/constance";
import ListItem from "@/layout/list-items";
import { useEffect } from "react";
export default function PageShowReel() {
  let listShowReel = listItem.filter(
    (value) => value.type == TypeContent.showreel
  );

  return <ListItem listItem={listShowReel} />;
}
