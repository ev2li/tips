"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const completionItemBuilder_1 = require("../completionItemBuilder");
const baseTemplates_1 = require("./baseTemplates");
const utils_1 = require("../utils");
class RchTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        return completionItemBuilder_1.CompletionItemBuilder
            .create("rch", code)
            .description(`<- expr`)
            .replace('<- {{expr}}$0', position, true)
            .build();
    }
}
exports.RchTemplate = RchTemplate;
class WchTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        return completionItemBuilder_1.CompletionItemBuilder
            .create("wch", code)
            .description(`expr <-`)
            .replace('{{expr}} <- $0', position, true)
            .build();
    }
}
exports.WchTemplate = WchTemplate;
class CloseTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        return completionItemBuilder_1.CompletionItemBuilder
            .create("close", code)
            .description(`close(expr)`)
            .replace('close({{expr}})', position, true)
            .build();
    }
}
exports.CloseTemplate = CloseTemplate;
class CapTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        return completionItemBuilder_1.CompletionItemBuilder
            .create("cap", code)
            .description(`cap(expr)`)
            .replace('cap({{expr}})', position, true)
            .build();
    }
}
exports.CapTemplate = CapTemplate;
class ArrTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        return completionItemBuilder_1.CompletionItemBuilder
            .create("arr", code)
            .description(`[]expr{}`)
            .replace('[]{{expr}}{$0}', position, true)
            .build();
    }
}
exports.ArrTemplate = ArrTemplate;
class SliceTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        return completionItemBuilder_1.CompletionItemBuilder
            .create("slice", code)
            .description(`[]expr()`)
            .replace('[]{{expr}}($0)', position, true)
            .build();
    }
}
exports.SliceTemplate = SliceTemplate;
class StrTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        return completionItemBuilder_1.CompletionItemBuilder
            .create("str", code)
            .description(`string(expr)`)
            .replace('string({{expr}})', position, true)
            .build();
    }
}
exports.StrTemplate = StrTemplate;
class FunTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        let replacement = '{{expr}}';       
        return completionItemBuilder_1.CompletionItemBuilder
            .create("fun", code)
            .description(`func expr()`)
            .replace(`func {{expr}}() {\n${utils_1.getIndentCharacters()}\${0}\n}`, position, true)
            .build();
    }
}
exports.FunTemplate = FunTemplate;
class InterTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        let replacement = '{{expr}}';       
        return completionItemBuilder_1.CompletionItemBuilder
            .create("inter", code)
            .description(`func expr()`)
            .replace(`func ({{expr}}) () {\n${utils_1.getIndentCharacters()}\${0}\n}`, position, true)
            .build();
    }
}
exports.InterTemplate = InterTemplate;
exports.build = () => [
    new RchTemplate(),
    new WchTemplate(),
    new CloseTemplate(),
    new CapTemplate(),
    new FunTemplate(),
    new InterTemplate(),
    new ArrTemplate(),
    new SliceTemplate(),
    new StrTemplate()
];
//# sourceMappingURL=varTemplates.js.map
