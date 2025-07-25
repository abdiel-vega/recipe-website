export const COMMON_ALLERGENS = [
  "Dairy",
  "Egg",
  "Gluten",
  "Peanut",
  "Tree Nut",
  "Soy",
  "Shellfish",
  "Fish",
  "Wheat",
] as const;

export type Allergen = (typeof COMMON_ALLERGENS)[number];

export const getAllergenQueryValue = (allergen: Allergen): string => {
  // for most common allergens, the display name matches Spoonacular's intolerance value.
  return allergen;
};
