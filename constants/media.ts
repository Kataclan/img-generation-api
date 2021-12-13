import { ZeniImageInfo, ZeniClasses, ZeniGenerations } from "../types";

export enum ZeniImageTraits {
  Background = "background",
  Class = "class",
  Body = "body",
  Skin = "skin",
  Eyes = "eyes",
  Mouth = "mouth",
  Forehead = "forehead",
  Necklace = "necklace",
  Crown = "crown",
}

export const IMAGE_WIDTH = 350;
export const IMAGE_HEIGHT = 350;

export const __mediaDir = `./media`;
export const __background = __mediaDir + "/background";
export const _AbodyImagesDir = __mediaDir + "/body";
export const __skinImagesDir = __mediaDir + "/skin";
export const __eyesImagesDir = __mediaDir + "/eyes";
export const __mouthImagesDir = __mediaDir + "/mouth";
export const __foreheadImgDir = __mediaDir + "/forehead";
export const __necklaceImagesDir = __mediaDir + "/necklace";
export const __crownsImagesDir = __mediaDir + "/crown";
export const __generatedImagesDir = __mediaDir + "/generated";

export const __generatedWarriorDir = __generatedImagesDir + "/warrior";
export const __generatedMagiDir = __generatedImagesDir + "/magi";
export const __generatedRogueDir = __generatedImagesDir + "/rogue";

export const MAGI_GEN0_BODIES: ZeniImageInfo[] = [
  {
    id: "magi_gen0_body_1",
    displayName: "Default",
    filePath: _AbodyImagesDir,
    fileName: "magi_gen0_body_1.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Magi,
    weight: 80,
  },
  {
    id: "magi_gen0_body_2",
    displayName: "Blue Ocean",
    filePath: _AbodyImagesDir,
    fileName: "magi_gen0_body_2.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Magi,
    weight: 3,
  },
  {
    id: "magi_gen0_body_3",
    displayName: "Neon Orange",
    filePath: _AbodyImagesDir,
    fileName: "magi_gen0_body_3.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Magi,
    weight: 3,
  },
  {
    id: "magi_gen0_body_4",
    displayName: "Aquamarine",
    filePath: _AbodyImagesDir,
    fileName: "magi_gen0_body_4.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Magi,
    weight: 3,
  },

  {
    id: "magi_gen0_body_5",
    displayName: "Acid Green  ",
    filePath: _AbodyImagesDir,
    fileName: "magi_gen0_body_5.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Magi,
    weight: 3,
  },

  {
    id: "magi_gen0_body_6",
    displayName: "Pink",
    filePath: _AbodyImagesDir,
    fileName: "magi_gen0_body_6.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Magi,
    weight: 3,
  },

  {
    id: "magi_gen0_body_7",
    displayName: "Neon Green",
    filePath: _AbodyImagesDir,
    fileName: "magi_gen0_body_7.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Magi,
    weight: 2,
  },

  {
    id: "magi_gen0_body_8",
    displayName: "Black",
    filePath: _AbodyImagesDir,
    fileName: "magi_gen0_body_8.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Magi,
    weight: 2,
  },
  {
    id: "warrior_gen0_body_9",
    displayName: "White",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_9.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 2,
  },
  {
    id: "magi_gen0_body_10",
    displayName: "Voor Elder",
    filePath: _AbodyImagesDir,
    fileName: "magi_gen0_body_10.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Magi,
    weight: 1,
  },
];

export const ROGUE_GEN0_BODIES: ZeniImageInfo[] = [
  {
    id: "rogue_gen0_body_1",
    displayName: "Default",
    filePath: _AbodyImagesDir,
    fileName: "rogue_gen0_body_1.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Rogue,
    weight: 80,
  },
  {
    id: "rogue_gen0_body_2",
    displayName: "Blue Ocean",
    filePath: _AbodyImagesDir,
    fileName: "rogue_gen0_body_2.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Rogue,
    weight: 3,
  },
  {
    id: "rogue_gen0_body_3",
    displayName: "Neon Orange",
    filePath: _AbodyImagesDir,
    fileName: "rogue_gen0_body_3.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Rogue,
    weight: 3,
  },

  {
    id: "rogue_gen0_body_4",
    displayName: "Aquamarine",
    filePath: _AbodyImagesDir,
    fileName: "rogue_gen0_body_4.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Rogue,
    weight: 3,
  },

  {
    id: "rogue_gen0_body_5",
    displayName: "Acid Green",
    filePath: _AbodyImagesDir,
    fileName: "rogue_gen0_body_5.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Rogue,
    weight: 3,
  },

  {
    id: "rogue_gen0_body_6",
    displayName: "Pink",
    filePath: _AbodyImagesDir,
    fileName: "rogue_gen0_body_6.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Rogue,
    weight: 3,
  },

  {
    id: "rogue_gen0_body_7",
    displayName: "Neon Green",
    filePath: _AbodyImagesDir,
    fileName: "rogue_gen0_body_7.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Rogue,
    weight: 2,
  },

  {
    id: "rogue_gen0_body_8",
    displayName: "Black",
    filePath: _AbodyImagesDir,
    fileName: "rogue_gen0_body_8.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Rogue,
    weight: 2,
  },
  {
    id: "warrior_gen0_body_9",
    displayName: "White",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_9.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 2,
  },
  {
    id: "rogue_gen0_body_9",
    displayName: "Eald Elder",
    filePath: _AbodyImagesDir,
    fileName: "rogue_gen0_body_9.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Rogue,
    weight: 1,
  },
];

export const WARRIOR_GEN0_BODIES: ZeniImageInfo[] = [
  {
    id: "warrior_gen0_body_1",
    displayName: "Default",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_1.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 80,
  },
  {
    id: "warrior_gen0_body_2",
    displayName: "Blue Ocean",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_2.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 3,
  },
  {
    id: "warrior_gen0_body_3",
    displayName: "Neon Orange",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_3.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 3,
  },
  {
    id: "warrior_gen0_body_4",
    displayName: "Aquamarine",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_4.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 3,
  },
  {
    id: "warrior_gen0_body_5",
    displayName: "Acid Green",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_5.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 3,
  },
  {
    id: "warrior_gen0_body_6",
    displayName: "Pink",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_6.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 3,
  },
  {
    id: "warrior_gen0_body_7",
    displayName: "Neon Green",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_7.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 2,
  },
  {
    id: "warrior_gen0_body_8",
    displayName: "Black",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_8.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 2,
  },
  {
    id: "warrior_gen0_body_9",
    displayName: "White",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_9.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 2,
  },
  {
    id: "warrior_gen0_body_10",
    displayName: "Miqopolis Elder",
    filePath: _AbodyImagesDir,
    fileName: "warrior_gen0_body_10.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.Warrior,
    weight: 1,
  },
];

export const GEN0_BODIES: ZeniImageInfo[] = [
  ...ROGUE_GEN0_BODIES,
  ...MAGI_GEN0_BODIES,
  ...WARRIOR_GEN0_BODIES,
];

export const GEN_0_SKINS: ZeniImageInfo[] = [
  {
    id: "skin_gen0_1",
    displayName: "Acid Purple",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_1.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 25,
  },
  {
    id: "skin_gen0_2",
    displayName: "Eald Purple",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_2.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 20,
  },
  {
    id: "skin_gen0_3",
    displayName: "Dark Aqua",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_3.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 15,
  },
  {
    id: "skin_gen0_4",
    displayName: "Neon Pink",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_4.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 15,
  },
  {
    id: "skin_gen0_5",
    displayName: "Aquamarine",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_5.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 10,
  },
  {
    id: "skin_gen0_6",
    displayName: "Default",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_6.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 7,
  },
  {
    id: "skin_gen0_7",
    displayName: "Neon Orange",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_7.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "skin_gen0_8",
    displayName: "Black",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_8.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 3,
  },
  {
    id: "skin_gen0_9",
    displayName: "Voor Blue",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_9.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 3,
  },
  {
    id: "skin_gen0_10",
    displayName: "White",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_10.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 3,
  },
  {
    id: "skin_gen0_11",
    displayName: "Miqopolis Red",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_11.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 3,
  },
  {
    id: "skin_gen0_12",
    displayName: "Stone",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_12.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 3,
  },
  {
    id: "skin_gen0_13",
    displayName: "Lava",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_13.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 3,
  },
  {
    id: "skin_gen0_14",
    displayName: "Gold Gemstone",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_14.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 3,
  },
  {
    id: "skin_gen0_15",
    displayName: "Platinum Gemstone",
    filePath: __skinImagesDir,
    fileName: "skin_gen0_15.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 3,
  },
];

export const GEN_0_MOUTHS: ZeniImageInfo[] = [
  {
    id: "mouth_gen0_1",
    displayName: "Black Moustache",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_1.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 10,
  },
  {
    id: "mouth_gen0_2",
    displayName: "Two Teeth",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_2.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 10,
  },
  {
    id: "mouth_gen0_3",
    displayName: "Closed",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_3.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 8,
  },
  {
    id: "mouth_gen0_4",
    displayName: "Cheeky Smile",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_4.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 10,
  },
  {
    id: "mouth_gen0_5",
    displayName: "Small Smile",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_5.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 10,
  },
  {
    id: "mouth_gen0_6",
    displayName: "Big Smile",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_6.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 10,
  },
  {
    id: "mouth_gen0_7",
    displayName: "Grinding",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_7.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "mouth_gen0_8",
    displayName: "Winner",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_8.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "mouth_gen0_9",
    displayName: "White Moustache",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_9.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "mouth_gen0_10",
    displayName: "Grumpy",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_10.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "mouth_gen0_11",
    displayName: "Anxious",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_11.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "mouth_gen0_12",
    displayName: "Beard",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_12.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "mouth_gen0_13",
    displayName: "Serious",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_13.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "mouth_gen0_14",
    displayName: "White Beard",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_14.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "mouth_gen0_15",
    displayName: "Relaxed Smile",
    filePath: __mouthImagesDir,
    fileName: "mouth_gen0_15.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 10,
  },
];

export const GEN_0_EYES: ZeniImageInfo[] = [
  {
    id: "eyes_gen0_1",
    displayName: "Aqua Cheecky",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_1.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 20,
  },
  {
    id: "eyes_gen0_2",
    displayName: "Orange Cheecky",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_2.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 15,
  },
  {
    id: "eyes_gen0_3",
    displayName: "Green Cheecky",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_3.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 15,
  },
  {
    id: "eyes_gen0_4",
    displayName: "Blue Cheecky",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_4.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 15,
  },
  {
    id: "eyes_gen0_5",
    displayName: "Brown Cheecky",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_5.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "eyes_gen0_6",
    displayName: "Red Cheecky",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_6.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "eyes_gen0_7",
    displayName: "Purple Cheecky",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_7.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "eyes_gen0_8",
    displayName: "Aqua Cute",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_8.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "eyes_gen0_9",
    displayName: "Red Cute",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_9.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "eyes_gen0_10",
    displayName: "Orange Cute",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_10.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_11",
    displayName: "Green Cute",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_11.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 5,
  },
  {
    id: "eyes_gen0_12",
    displayName: "Brown Cute",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_12.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 1,
  },
  {
    id: "eyes_gen0_13",
    displayName: "Blue Cute",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_13.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_14",
    displayName: "Purple Cute",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_14.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_15",
    displayName: "Happy",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_15.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_16",
    displayName: "Sleepy",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_16.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_17",
    displayName: "Rounded Blue Glasses",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_17.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_18",
    displayName: "Rounded Golden Glasses",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_18.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_19",
    displayName: "Rounded Black Glasses",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_19.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_20",
    displayName: "Cool Glasses",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_20.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_21",
    displayName: "Sharingan",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_21.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_22",
    displayName: "Rinnegan",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_22.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_23",
    displayName: "Monocle",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_23.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_24",
    displayName: "God",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_24.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
  {
    id: "eyes_gen0_25",
    displayName: "Flash",
    filePath: __eyesImagesDir,
    fileName: "eyes_gen0_25.png",
    class: ZeniClasses.All,
    generation: ZeniGenerations.Gen0,
    weight: 2,
  },
];

export const GEN_0_FOREHEADS: ZeniImageInfo[] = [
  {
    id: "forehead_none",
    displayName: "None",
    filePath: "",
    fileName: "",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 70,
  },
  {
    id: "forehead_gen0_1",
    displayName: "Single Red Mushroom",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_1.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 20,
  },
  {
    id: "forehead_gen0_2",
    displayName: "Single Blue Mushroom",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_2.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 1,
  },
  {
    id: "forehead_gen0_3",
    displayName: "Single Green Mushroom",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_3.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 10,
  },
  {
    id: "forehead_gen0_4",
    displayName: "Multiple Red Mushrooms",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_4.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 8,
  },
  {
    id: "forehead_gen0_5",
    displayName: "Multiple Blue Mushrooms",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_5.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 5,
  },
  {
    id: "forehead_gen0_6",
    displayName: "Multiple Green Mushrooms",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_6.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 3,
  },
  {
    id: "forehead_gen0_7",
    displayName: "Horns",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_7.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 10,
  },
  {
    id: "forehead_gen0_8",
    displayName: "Armor",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_8.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 2,
  },
  {
    id: "forehead_gen0_9",
    displayName: "Shiny Mushrooms",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_9.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 2,
  },
  {
    id: "forehead_gen0_10",
    displayName: "Gem",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_10.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 2,
  },
  {
    id: "forehead_gen0_11",
    displayName: "Golden Mushroom",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_11.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 2,
  },
  {
    id: "forehead_gen0_12",
    displayName: "Third Eye",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_12.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 2,
  },
  {
    id: "forehead_gen0_13",
    displayName: "Shine",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_13.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 2,
  },
  {
    id: "forehead_gen0_14",
    displayName: "Moon Tattoo",
    filePath: __foreheadImgDir,
    fileName: "forehead_gen0_14.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 2,
  },
];

export const GEN_0_NECKLACES: ZeniImageInfo[] = [
  {
    id: "necklace_none",
    displayName: "None",
    filePath: "",
    fileName: "",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 75,
  },
  {
    id: "necklace_gen0_1",
    displayName: "Bitcoin",
    filePath: __necklaceImagesDir,
    fileName: "necklace_gen0_1.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 2,
  },
  {
    id: "necklace_gen0_2",
    displayName: "Ethereum",
    filePath: __necklaceImagesDir,
    fileName: "necklace_gen0_2.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 1,
  },
  {
    id: "necklace_gen0_3",
    displayName: "Solana",
    filePath: __necklaceImagesDir,
    fileName: "necklace_gen0_3.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 2,
  },
  {
    id: "necklace_gen0_4",
    displayName: "Polygon",
    filePath: __necklaceImagesDir,
    fileName: "necklace_gen0_4.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 5,
  },
  {
    id: "necklace_gen0_5",
    displayName: "Avalanche",
    filePath: __necklaceImagesDir,
    fileName: "necklace_gen0_5.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 3,
  },
  {
    id: "necklace_gen0_6",
    displayName: "Crypto",
    filePath: __necklaceImagesDir,
    fileName: "necklace_gen0_6.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 15,
  },
  {
    id: "necklace_gen0_7",
    displayName: "Binance",
    filePath: __necklaceImagesDir,
    fileName: "necklace_gen0_7.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 5,
  },
  {
    id: "necklace_gen0_8",
    displayName: "Zeniverse",
    filePath: __necklaceImagesDir,
    fileName: "necklace_gen0_8.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 1,
  },
];

export const GEN_0_CROWNS: ZeniImageInfo[] = [
  {
    id: "crown_none",
    displayName: "None",
    filePath: "",
    fileName: "",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 10,
  },
  {
    id: "crown_gen0_1",
    displayName: "Eald Crown",
    filePath: __crownsImagesDir,
    fileName: "crown_gen0_1.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 30,
  },
  {
    id: "crown_gen0_2",
    displayName: "Voor Crown",
    filePath: __crownsImagesDir,
    fileName: "crown_gen0_2.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 30,
  },
  {
    id: "crown_gen0_3",
    displayName: "Miquopolis Crown",
    filePath: __crownsImagesDir,
    fileName: "crown_gen0_3.png",
    generation: ZeniGenerations.Gen0,
    class: ZeniClasses.All,
    weight: 30,
  },
];

export const IMAGES_BY_TRAIT: {
  [key: string]: ZeniImageInfo[];
} = {
  [ZeniImageTraits.Body]: GEN0_BODIES,
  [ZeniImageTraits.Skin]: GEN_0_SKINS,
  [ZeniImageTraits.Mouth]: GEN_0_MOUTHS,
  [ZeniImageTraits.Eyes]: GEN_0_EYES,
  [ZeniImageTraits.Forehead]: GEN_0_FOREHEADS,
  [ZeniImageTraits.Necklace]: GEN_0_NECKLACES,
  [ZeniImageTraits.Crown]: GEN_0_CROWNS,
};
