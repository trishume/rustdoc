initSidebarItems({"enum":[["ContextReference",""],["MatchOperation",""],["Pattern",""]],"fn":[["context_iter","Returns an iterator over all the match patterns in this context. It recursively follows include directives. Can only be run on contexts that have already been linked up."]],"struct":[["Context",""],["LinkerLink","This wrapper only exists so that I can implement a serialization trait that crashes if you try and serialize this."],["MatchIter","Used to iterate over all the match patterns in a context. Basically walks the tree of patterns and include directives in the correct order."],["MatchPattern",""],["SyntaxDefinition","The main data structure representing a syntax definition loaded from a `.sublime-syntax` file. You'll probably only need these as references to be passed around to parsing code."]],"type":[["CaptureMapping",""],["ContextPtr",""]]});