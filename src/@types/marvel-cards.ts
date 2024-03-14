export type PackName =
  | "Core Set"
  | "Guardians of the Galaxy"
  | "The Rise of Red Skull"
  | "The Once and Future Kang"
  | "Galaxy's Most Wanted"
  | "The Mad Titan's Shadow"
  | "The Hood"
  | "The Wrecking Crew"
  | "Ms. Marvel"
  | "Captain America"
  | "Thor"
  | "Black Widow"
  | "Doctor Strange"
  | "Hulk"
  | "Venom"
  | "The Green Goblin";

export type TypeCode =
  | "hero"
  | "alter_ego"
  | "ally"
  | "event"
  | "resource"
  | "support"
  | "upgrade";

export type Card = {
  code: string;
  type_code: TypeCode;
  pack_name: PackName;
  url: string;
  imagesrc: string;
  name: string;
};
