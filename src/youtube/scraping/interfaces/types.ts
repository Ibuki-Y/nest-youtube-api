export type VideoId = string | null;
export type LandingPageUrl = string | null;

export type ScrapedResult = {
  videoId: VideoId;
  landingPageUrl: LandingPageUrl;
};
