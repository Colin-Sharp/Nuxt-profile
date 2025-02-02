export interface SkillInterface {
  skillLevel: SkillLevelEnum,
  text: string,
  imgSrc: string
}

export enum SkillLevelEnum {
  FOUNDATION = 'foundation',
  INTERMEDIATE = 'intermediate',
  PRO = 'pro',
  HIGHTLY_SKILLED = 'highly-skilled'
}