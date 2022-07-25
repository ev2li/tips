"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const completionItemBuilder_1 = require("../completionItemBuilder");
const baseTemplates_1 = require("./baseTemplates");
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
exports.build = () => [
    new RchTemplate(),
    new WchTemplate(),
    new CloseTemplate(),
    new CapTemplate(),
];
//# sourceMappingURL=varTemplates.js.map
