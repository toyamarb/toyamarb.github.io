import { Hono } from "hono";
import { cors } from "hono/cors";
import xmldom from "xmldom";

const app = new Hono();

app.use("/feed", cors());

app.get("/feed", async (c) => {
  const res = await fetch("https://toyamarb.connpass.com/ja.atom");
  const text = await res.text();

  const domParser = new xmldom.DOMParser();
  const root = domParser.parseFromString(text);
  const entries = root.getElementsByTagName("entry");

  return c.json([
    parseEntry(entries.item(0)!),
    parseEntry(entries.item(1)!),
    parseEntry(entries.item(2)!),
    parseEntry(entries.item(3)!),
  ]);
});

const parseEntry = (entry: Element) => {
  const title = entry.getElementsByTagName("title").item(0)?.textContent || "";
  const url =
    entry.getElementsByTagName("link").item(0)?.getAttribute("href") || "";
  const schedule = pickSchedule(
    entry.getElementsByTagName("summary").item(0)?.textContent || ""
  );
  const place = pickPlace(
    entry.getElementsByTagName("summary").item(0)?.textContent || ""
  );

  return { title, url, schedule, place };
};

const pickSchedule = (str: string) => {
  console.log(str);
  const matched = str.match(/開催日時: (.+?)</);
  if (matched && matched.length > 1) {
    return matched[1];
  }
  return "";
};

const pickPlace = (str: string) => {
  const matched = str.match(/開催場所: (.+?)</);
  if (matched && matched.length > 1) {
    return matched[1];
  }
  return "";
};

export default app;
