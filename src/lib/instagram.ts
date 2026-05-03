import { REELS, type ReelItem } from "@/data/reels";

interface IgMediaNode {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | "REELS";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp?: string;
}

interface IgMediaResponse {
  data?: IgMediaNode[];
  error?: { message: string; code: number };
}

const ENDPOINT =
  "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";

export async function getInstagramReels(limit = 8): Promise<ReelItem[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) return REELS;

  try {
    const res = await fetch(`${ENDPOINT}&limit=${limit}&access_token=${token}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return REELS;

    const json = (await res.json()) as IgMediaResponse;
    if (!json.data) return REELS;

    const reels = json.data
      .filter((m) => m.media_type === "VIDEO" || m.media_type === "REELS")
      .slice(0, limit)
      .map<ReelItem>((m) => {
        const caption = (m.caption ?? "").trim();
        const firstLine = caption.split(/\r?\n/)[0] ?? "";
        const words = firstLine.split(/\s+/).filter(Boolean);
        const last = words.length > 0 ? words[words.length - 1]! : "Reel";
        const subtitle =
          words.length > 1 ? words.slice(0, -1).join(" ") : "From the studio";

        return {
          id: m.id,
          videoSrc: m.media_url ?? "",
          posterSrc: m.thumbnail_url,
          caption: last,
          subtitle,
          views: 0,
          permalink: m.permalink,
        };
      })
      .filter((r) => r.videoSrc.length > 0);

    return reels.length > 0 ? reels : REELS;
  } catch {
    return REELS;
  }
}
