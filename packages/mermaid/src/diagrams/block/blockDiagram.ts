import { DiagramDefinition } from '../../diagram-api/types.js';
// @ts-ignore: jison doesn't export types
import parser from './parser/blockDiagram.jison';
import db from './blockDB.js';
import renderer from './blockRenderer.js';
import { prepareTextForParsing } from './blockUtils.js';

const originalParse = parser.parse.bind(parser);
parser.parse = (text: string) => originalParse(prepareTextForParsing(text));

export const diagram: DiagramDefinition = {
  parser,
  db,
  renderer,
};