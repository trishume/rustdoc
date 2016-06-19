initSidebarItems({"enum":[["ParseScopeError","Not all strings are valid scopes"],["ScopeStackOp","A change to a scope stack. Generally `Noop` is only used internally and you don't have to worry about ever getting one back from a public function. Use `ScopeStack#apply` to apply this change."]],"struct":[["MatchPower","Wrapper to get around the fact Rust f64 doesn't implement Ord and there is no non-NaN float type"],["SCOPE_REPO","The global scope repo, exposed in case you want to minimize locking and unlocking. Shouldn't be necessary for you to use. See the `ScopeRepository` docs."],["Scope","A hierarchy of atoms with semi-standardized names used to accord semantic information to a specific piece of text. Generally written with the atoms separated by dots. By convention atoms are all lowercase alphanumeric."],["ScopeRepository","The structure used to keep of the mapping between scope atom numbers and their string names. It is only exposed in case you want to lock `SCOPE_REPO` and then allocate a whole bunch of scopes at once without thrashing the lock. It is recommended you just use `Scope::new()`"],["ScopeStack","A stack/sequence of scopes. This is used both to represent hierarchies for a given token of text, as well as in `ScopeSelectors`. Press `ctrl+shift+p` in Sublime Text to see the scope stack at a given point. Also see the TextMate docs."]]});