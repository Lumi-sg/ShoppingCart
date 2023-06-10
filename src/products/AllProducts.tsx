import { boxes } from "./Boxes";
import { keycaps } from "./Keycaps";
import { switches } from "./Switches";
import { phobs } from "./Controllers";

export const allProducts = boxes.concat(keycaps, switches, phobs);
