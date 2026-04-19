import { USER } from "./user";

export const SITE = {
  name: USER.fullName,
  description: USER.bio,
  url: "https://michelito.dev",
  author: USER.fullName,
  email: USER.email,
  social: {
    github: USER.social.github.url,
    x: USER.social.x.url,
    linkedin: USER.social.linkedin.url,
  },
};

export const SOURCE_CODE_URL = "https://github.com/nsmichelj/michelito.dev";
