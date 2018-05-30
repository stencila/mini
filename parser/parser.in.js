import antlr4 from 'antlr4/index'
import _MiniLexer from '../tmp/parser/MiniLexer'
import _MiniParser from '../tmp/parser/MiniParser'
import _MiniListener from '../tmp/parser/MiniListener'

const { InputStream, CommonTokenStream } = antlr4
const treeWalker = antlr4.tree.ParseTreeWalker.DEFAULT
const MiniLexer = _MiniLexer.MiniLexer
const MiniParser = _MiniParser.MiniParser
const MiniListener = _MiniListener.MiniListener

export {
  InputStream, CommonTokenStream, treeWalker,
  MiniLexer, MiniParser, MiniListener
}
