PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
            [PR['PR_PUNCTUATION'], /^[.!%&()*+,\-;<=>?\[\\\]^{|}:]+/, null, '.!%&()*+,-;<=>?[\\]^{|}:']
        ],
        [
            // keywords
            [PR['PR_KEYWORD'],
                /^\b(package|public|protected|private|open|abstract|constructor|final|override|import|for|while|as|typealias|get|set|((data|enum|annotation|sealed) )?class|this|super|val|var|fun|is|in|throw|return|break|continue|(companion )?object|if|try|else|do|when|init|interface|typeof)\b/],
            [PR['PR_LITERAL'], /^(?:true|false|null)\b/],
            // number literals
            [PR['PR_LITERAL'], /^(0[xX][0-9a-fA-F_]+L?|0[bB][0-1]+L?|[0-9_.]+([eE]-?[0-9]+)?[fFL]?)/],
            [PR['PR_TYPE'], /^(\b[A-Z]+[a-z][a-zA-Z0-9_$@]*|`.*`)/, null],
            //double slash comments
            [PR['PR_COMMENT'], /^\/\/.*/],
            //slash star comments and documentation
            [PR['PR_COMMENT'], /^\/\*[\s\S]*?(?:\*\/|$)/],
            // char
            [PR['PR_STRING'], /'.'/],
            // string
            [PR['PR_STRING'], /^"([^"\\]|\\[\s\S])*"/],
            // multiline string
            [PR['PR_STRING'], /^"{3}[\s\S]*?[^\\]"{3}/],
            // annotation (and label)
            [PR['PR_LITERAL'], /^@([a-zA-Z0-9_$@]*|`.*`)/],
            // label definition
            [PR['PR_LITERAL'], /^[a-zA-Z0-9_]+@/]
        ]),
    ['kotlin']);